/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_JoinedInputs */

const en_ranger_user_joined = /** @type {(inputs: Ranger_User_JoinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Joined`)
};

const es_ranger_user_joined = /** @type {(inputs: Ranger_User_JoinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se unió`)
};

const de_ranger_user_joined = /** @type {(inputs: Ranger_User_JoinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dabei seit`)
};

const fr_ranger_user_joined = /** @type {(inputs: Ranger_User_JoinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscrit`)
};

const it_ranger_user_joined = /** @type {(inputs: Ranger_User_JoinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iscritto`)
};

const nl_ranger_user_joined = /** @type {(inputs: Ranger_User_JoinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lid sinds`)
};

const pl_ranger_user_joined = /** @type {(inputs: Ranger_User_JoinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dołączył`)
};

const pt_ranger_user_joined = /** @type {(inputs: Ranger_User_JoinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrou em`)
};

const ru_ranger_user_joined = /** @type {(inputs: Ranger_User_JoinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зарегистрирован`)
};

const sv_ranger_user_joined = /** @type {(inputs: Ranger_User_JoinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gick med`)
};

const tr_ranger_user_joined = /** @type {(inputs: Ranger_User_JoinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Katılma`)
};

const zh_ranger_user_joined = /** @type {(inputs: Ranger_User_JoinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注册于`)
};

const ja_ranger_user_joined = /** @type {(inputs: Ranger_User_JoinedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`登録日`)
};

/**
* | output |
* | --- |
* | "Joined" |
*
* @param {Ranger_User_JoinedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_joined = /** @type {((inputs?: Ranger_User_JoinedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_JoinedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_joined(inputs)
	if (locale === "de") return de_ranger_user_joined(inputs)
	if (locale === "fr") return fr_ranger_user_joined(inputs)
	if (locale === "it") return it_ranger_user_joined(inputs)
	if (locale === "nl") return nl_ranger_user_joined(inputs)
	if (locale === "pl") return pl_ranger_user_joined(inputs)
	if (locale === "pt") return pt_ranger_user_joined(inputs)
	if (locale === "ru") return ru_ranger_user_joined(inputs)
	if (locale === "sv") return sv_ranger_user_joined(inputs)
	if (locale === "tr") return tr_ranger_user_joined(inputs)
	if (locale === "zh") return zh_ranger_user_joined(inputs)
	if (locale === "ja") return ja_ranger_user_joined(inputs)
	return en_ranger_user_joined(inputs)
});
