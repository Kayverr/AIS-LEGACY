export const create = async (profile) => {
    const transformedProfile = {
        name: profile.firstName + " "+ profile.lastName,
        birthdate: profile.dob,
        "program": profile.course + "" + profile.major,
        "address": profile.address,
        "studentsStatus": profile.status
    }
    console.log(transformedProfile);

// Make the API call to create the student profile
    const response = await fetch(
        `https://ais-simulated-legacy.onrender.com/api/students`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(transformedProfile),
        });
        return await response.json();
}