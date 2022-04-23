const data = [
  {
    name: 'Person One',
    gender: 'male',
    age: 33,
    lookingfor: 'female',
    location: 'Sarajevo BiH',
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    name: 'Person Two',
    gender: 'female',
    age: 33,
    lookingfor: 'male',
    location: 'Sarajevo BiH',
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
  {
    name: 'Person Three',
    gender: 'male',
    age: 33,
    lookingfor: 'female',
    location: 'Sarajevo BiH',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
  },
];

const profiles = profileIterator(data);
showProfile();

function profileIterator(profiles) {
  let i = 0;

  return {
    next: function () {
      return i < profiles.length
        ? { value: profiles[i++], done: false }
        : { done: true };
    },
  };
}

document.getElementById('next').addEventListener('click', showProfile);

function showProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById(
      'imageDisplay'
    ).innerHTML = `<img src="${currentProfile.image}"/>`;

    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Gender: ${currentProfile.gender}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
    `;
  } else {
    window.location.reload();
  }
}
