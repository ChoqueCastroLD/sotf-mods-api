/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ username: NonNullable<unknown>, date: NonNullable<unknown> }} Oauth_Connected_AsInputs */

const en_oauth_connected_as = /** @type {(inputs: Oauth_Connected_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Connected as ${i?.username} since ${i?.date}`)
};

const es_oauth_connected_as = /** @type {(inputs: Oauth_Connected_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Conectada como ${i?.username} desde el ${i?.date}`)
};

const de_oauth_connected_as = /** @type {(inputs: Oauth_Connected_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verbunden als ${i?.username} seit ${i?.date}`)
};

const fr_oauth_connected_as = /** @type {(inputs: Oauth_Connected_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Connecté en tant que ${i?.username} depuis le ${i?.date}`)
};

const it_oauth_connected_as = /** @type {(inputs: Oauth_Connected_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Collegato come ${i?.username} dal ${i?.date}`)
};

const nl_oauth_connected_as = /** @type {(inputs: Oauth_Connected_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gekoppeld als ${i?.username} sinds ${i?.date}`)
};

const pl_oauth_connected_as = /** @type {(inputs: Oauth_Connected_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Połączono jako ${i?.username} od ${i?.date}`)
};

const pt_oauth_connected_as = /** @type {(inputs: Oauth_Connected_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Conectado como ${i?.username} desde ${i?.date}`)
};

const ru_oauth_connected_as = /** @type {(inputs: Oauth_Connected_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Подключён как ${i?.username} с ${i?.date}`)
};

const sv_oauth_connected_as = /** @type {(inputs: Oauth_Connected_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ansluten som ${i?.username} sedan ${i?.date}`)
};

const tr_oauth_connected_as = /** @type {(inputs: Oauth_Connected_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.username} olarak bağlı, ${i?.date} tarihinden beri`)
};

const zh_oauth_connected_as = /** @type {(inputs: Oauth_Connected_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已关联为 ${i?.username}，自 ${i?.date}`)
};

const ja_oauth_connected_as = /** @type {(inputs: Oauth_Connected_AsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.username} として ${i?.date} から連携中`)
};

/**
* | output |
* | --- |
* | "Connected as {username} since {date}" |
*
* @param {Oauth_Connected_AsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const oauth_connected_as = /** @type {((inputs: Oauth_Connected_AsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Connected_AsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_oauth_connected_as(inputs)
	if (locale === "de") return de_oauth_connected_as(inputs)
	if (locale === "fr") return fr_oauth_connected_as(inputs)
	if (locale === "it") return it_oauth_connected_as(inputs)
	if (locale === "nl") return nl_oauth_connected_as(inputs)
	if (locale === "pl") return pl_oauth_connected_as(inputs)
	if (locale === "pt") return pt_oauth_connected_as(inputs)
	if (locale === "ru") return ru_oauth_connected_as(inputs)
	if (locale === "sv") return sv_oauth_connected_as(inputs)
	if (locale === "tr") return tr_oauth_connected_as(inputs)
	if (locale === "zh") return zh_oauth_connected_as(inputs)
	if (locale === "ja") return ja_oauth_connected_as(inputs)
	return en_oauth_connected_as(inputs)
});
