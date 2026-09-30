/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_UnverifyInputs */

const en_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove flag`)
};

const es_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar marca`)
};

const de_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markierung entfernen`)
};

const fr_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer le statut`)
};

const it_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Togli lo stato`)
};

const nl_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markering intrekken`)
};

const pl_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odbierz status`)
};

const pt_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover marca`)
};

const ru_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Снять статус`)
};

const sv_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort markering`)
};

const tr_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İşareti kaldır`)
};

const zh_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消标记`)
};

const ja_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`認証を外す`)
};

/**
* | output |
* | --- |
* | "Remove flag" |
*
* @param {Ranger_User_UnverifyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_unverify = /** @type {((inputs?: Ranger_User_UnverifyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_UnverifyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_unverify(inputs)
	if (locale === "de") return de_ranger_user_unverify(inputs)
	if (locale === "fr") return fr_ranger_user_unverify(inputs)
	if (locale === "it") return it_ranger_user_unverify(inputs)
	if (locale === "nl") return nl_ranger_user_unverify(inputs)
	if (locale === "pl") return pl_ranger_user_unverify(inputs)
	if (locale === "pt") return pt_ranger_user_unverify(inputs)
	if (locale === "ru") return ru_ranger_user_unverify(inputs)
	if (locale === "sv") return sv_ranger_user_unverify(inputs)
	if (locale === "tr") return tr_ranger_user_unverify(inputs)
	if (locale === "zh") return zh_ranger_user_unverify(inputs)
	if (locale === "ja") return ja_ranger_user_unverify(inputs)
	return en_ranger_user_unverify(inputs)
});
