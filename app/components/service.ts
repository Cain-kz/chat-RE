import request from "@/app/utils/request";

export async function remove(id: string) {
    return request(`/jetlinks/app-version/${id}`, {
        method: 'DELETE',
    });
}

export async function updateSave(id: string) {
    return request(`/jetlinks/app-version/${id}/deploy`, {
        method: 'POST',
    });
}

export async function listRn(params: any) {
    return request(`/jetlinks/app-version/rn/_query`, {
        method: 'GET',
        params,
    });
}

export async function userLogin(data: any): Promise<any> {
    return request(`http://120.25.222.199:8095/ios/class/diagnosis/user/lgin`, {
      method: 'POST',
      data
    });
  }
  

export async function removeRn(id: string) {
    return request(`/jetlinks/app-version/rn/${id}`, {
        method: 'DELETE',
    });
}
