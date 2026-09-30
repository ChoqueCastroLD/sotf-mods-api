/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_Last_SeenInputs */

const en_ranger_user_last_seen = /** @type {(inputs: Ranger_User_Last_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last seen`)
};

const es_ranger_user_last_seen = /** @type {(inputs: Ranger_User_Last_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última vez`)
};

const de_ranger_user_last_seen = /** @type {(inputs: Ranger_User_Last_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zuletzt gesehen`)
};

const fr_ranger_user_last_seen = /** @type {(inputs: Ranger_User_Last_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vu pour la dernière fois`)
};

const it_ranger_user_last_seen = /** @type {(inputs: Ranger_User_Last_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultimo accesso`)
};

const nl_ranger_user_last_seen = /** @type {(inputs: Ranger_User_Last_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laatst gezien`)
};

const pl_ranger_user_last_seen = /** @type {(inputs: Ranger_User_Last_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnio widziany`)
};

const pt_ranger_user_last_seen = /** @type {(inputs: Ranger_User_Last_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visto por último`)
};

const ru_ranger_user_last_seen = /** @type {(inputs: Ranger_User_Last_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Был в сети`)
};

const sv_ranger_user_last_seen = /** @type {(inputs: Ranger_User_Last_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senast sedd`)
};

const tr_ranger_user_last_seen = /** @type {(inputs: Ranger_User_Last_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son görülme`)
};

const zh_ranger_user_last_seen = /** @type {(inputs: Ranger_User_Last_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近在线`)
};

const ja_ranger_user_last_seen = /** @type {(inputs: Ranger_User_Last_SeenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最終アクセス`)
};

/**
* | output |
* | --- |
* | "Last seen" |
*
* @param {Ranger_User_Last_SeenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_last_seen = /** @type {((inputs?: Ranger_User_Last_SeenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Last_SeenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_last_seen(inputs)
	if (locale === "de") return de_ranger_user_last_seen(inputs)
	if (locale === "fr") return fr_ranger_user_last_seen(inputs)
	if (locale === "it") return it_ranger_user_last_seen(inputs)
	if (locale === "nl") return nl_ranger_user_last_seen(inputs)
	if (locale === "pl") return pl_ranger_user_last_seen(inputs)
	if (locale === "pt") return pt_ranger_user_last_seen(inputs)
	if (locale === "ru") return ru_ranger_user_last_seen(inputs)
	if (locale === "sv") return sv_ranger_user_last_seen(inputs)
	if (locale === "tr") return tr_ranger_user_last_seen(inputs)
	if (locale === "zh") return zh_ranger_user_last_seen(inputs)
	if (locale === "ja") return ja_ranger_user_last_seen(inputs)
	return en_ranger_user_last_seen(inputs)
});
