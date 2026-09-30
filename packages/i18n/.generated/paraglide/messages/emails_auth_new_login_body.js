/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Emails_Auth_New_Login_BodyInputs */

const en_emails_auth_new_login_body = /** @type {(inputs: Emails_Auth_New_Login_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Your account was signed in to on ${i?.when} (UTC) from a device or country we had not seen before.`)
};

const es_emails_auth_new_login_body = /** @type {(inputs: Emails_Auth_New_Login_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se inició sesión en tu cuenta el ${i?.when} (UTC) desde un dispositivo o país que no habíamos visto antes.`)
};

const de_emails_auth_new_login_body = /** @type {(inputs: Emails_Auth_New_Login_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dein Konto wurde am ${i?.when} (UTC) von einem Gerät oder aus einem Land angemeldet, das wir noch nicht kannten.`)
};

const fr_emails_auth_new_login_body = /** @type {(inputs: Emails_Auth_New_Login_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Votre compte a été connecté le ${i?.when} (UTC) depuis un appareil ou un pays que nous ne connaissions pas.`)
};

const it_emails_auth_new_login_body = /** @type {(inputs: Emails_Auth_New_Login_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Il tuo account è stato usato per accedere il ${i?.when} (UTC) da un dispositivo o un paese che non avevamo mai visto.`)
};

const nl_emails_auth_new_login_body = /** @type {(inputs: Emails_Auth_New_Login_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Er is op ${i?.when} (UTC) ingelogd op je account vanaf een apparaat of land dat we nog niet kenden.`)
};

const pl_emails_auth_new_login_body = /** @type {(inputs: Emails_Auth_New_Login_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zalogowano na Twoje konto ${i?.when} (UTC) z urządzenia lub kraju, których wcześniej nie widzieliśmy.`)
};

const pt_emails_auth_new_login_body = /** @type {(inputs: Emails_Auth_New_Login_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sua conta foi acessada em ${i?.when} (UTC) a partir de um dispositivo ou país que não conhecíamos.`)
};

const ru_emails_auth_new_login_body = /** @type {(inputs: Emails_Auth_New_Login_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`В ваш аккаунт вошли ${i?.when} (UTC) с устройства или из страны, которых мы раньше не видели.`)
};

const sv_emails_auth_new_login_body = /** @type {(inputs: Emails_Auth_New_Login_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ditt konto loggades in ${i?.when} (UTC) från en enhet eller ett land vi inte sett tidigare.`)
};

const tr_emails_auth_new_login_body = /** @type {(inputs: Emails_Auth_New_Login_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hesabına ${i?.when} (UTC) tarihinde daha önce görmediğimiz bir cihaz veya ülkeden giriş yapıldı.`)
};

const zh_emails_auth_new_login_body = /** @type {(inputs: Emails_Auth_New_Login_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你的账号于 ${i?.when}（UTC）从我们未见过的设备或国家登录。`)
};

const ja_emails_auth_new_login_body = /** @type {(inputs: Emails_Auth_New_Login_BodyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.when}（UTC）に、これまで見たことのない端末または国からアカウントにログインされました。`)
};

/**
* | output |
* | --- |
* | "Your account was signed in to on {when} (UTC) from a device or country we had not seen before." |
*
* @param {Emails_Auth_New_Login_BodyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_new_login_body = /** @type {((inputs: Emails_Auth_New_Login_BodyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_New_Login_BodyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_new_login_body(inputs)
	if (locale === "de") return de_emails_auth_new_login_body(inputs)
	if (locale === "fr") return fr_emails_auth_new_login_body(inputs)
	if (locale === "it") return it_emails_auth_new_login_body(inputs)
	if (locale === "nl") return nl_emails_auth_new_login_body(inputs)
	if (locale === "pl") return pl_emails_auth_new_login_body(inputs)
	if (locale === "pt") return pt_emails_auth_new_login_body(inputs)
	if (locale === "ru") return ru_emails_auth_new_login_body(inputs)
	if (locale === "sv") return sv_emails_auth_new_login_body(inputs)
	if (locale === "tr") return tr_emails_auth_new_login_body(inputs)
	if (locale === "zh") return zh_emails_auth_new_login_body(inputs)
	if (locale === "ja") return ja_emails_auth_new_login_body(inputs)
	return en_emails_auth_new_login_body(inputs)
});
