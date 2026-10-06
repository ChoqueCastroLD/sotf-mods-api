/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Logout_TextInputs */

const en_auth_logout_text = /** @type {(inputs: Auth_Logout_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Another site sent you here. Confirm to log out of SOTF Mods on this device.`)
};

const es_auth_logout_text = /** @type {(inputs: Auth_Logout_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otro sitio te ha traído hasta aquí. Confirma para cerrar tu sesión de SOTF Mods en este dispositivo.`)
};

const de_auth_logout_text = /** @type {(inputs: Auth_Logout_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine andere Website hat dich hierher geschickt. Bestätige, um dich auf diesem Gerät von SOTF Mods abzumelden.`)
};

const fr_auth_logout_text = /** @type {(inputs: Auth_Logout_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un autre site vous a envoyé ici. Confirmez pour vous déconnecter de SOTF Mods sur cet appareil.`)
};

const it_auth_logout_text = /** @type {(inputs: Auth_Logout_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un altro sito ti ha mandato qui. Conferma per uscire da SOTF Mods su questo dispositivo.`)
};

const nl_auth_logout_text = /** @type {(inputs: Auth_Logout_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een andere site heeft je hierheen gestuurd. Bevestig om op dit apparaat uit te loggen bij SOTF Mods.`)
};

const pl_auth_logout_text = /** @type {(inputs: Auth_Logout_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inna strona przysłała cię tutaj. Potwierdź, aby wylogować się z SOTF Mods na tym urządzeniu.`)
};

const pt_auth_logout_text = /** @type {(inputs: Auth_Logout_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outro site trouxe você até aqui. Confirme para sair do SOTF Mods neste dispositivo.`)
};

const ru_auth_logout_text = /** @type {(inputs: Auth_Logout_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вас направил сюда другой сайт. Подтвердите выход из SOTF Mods на этом устройстве.`)
};

const sv_auth_logout_text = /** @type {(inputs: Auth_Logout_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En annan webbplats skickade dig hit. Bekräfta för att logga ut från SOTF Mods på den här enheten.`)
};

const tr_auth_logout_text = /** @type {(inputs: Auth_Logout_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seni buraya başka bir site gönderdi. Bu cihazda SOTF Mods’tan çıkmak için onayla.`)
};

const zh_auth_logout_text = /** @type {(inputs: Auth_Logout_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你是从其他网站跳转过来的。确认后将在此设备上退出 SOTF Mods。`)
};

const ja_auth_logout_text = /** @type {(inputs: Auth_Logout_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`別のサイトからこのページに移動しました。このデバイスで SOTF Mods からログアウトするには確認してください。`)
};

/**
* | output |
* | --- |
* | "Another site sent you here. Confirm to log out of SOTF Mods on this device." |
*
* @param {Auth_Logout_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_logout_text = /** @type {((inputs?: Auth_Logout_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Logout_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_logout_text(inputs)
	if (locale === "de") return de_auth_logout_text(inputs)
	if (locale === "fr") return fr_auth_logout_text(inputs)
	if (locale === "it") return it_auth_logout_text(inputs)
	if (locale === "nl") return nl_auth_logout_text(inputs)
	if (locale === "pl") return pl_auth_logout_text(inputs)
	if (locale === "pt") return pt_auth_logout_text(inputs)
	if (locale === "ru") return ru_auth_logout_text(inputs)
	if (locale === "sv") return sv_auth_logout_text(inputs)
	if (locale === "tr") return tr_auth_logout_text(inputs)
	if (locale === "zh") return zh_auth_logout_text(inputs)
	if (locale === "ja") return ja_auth_logout_text(inputs)
	return en_auth_logout_text(inputs)
});
