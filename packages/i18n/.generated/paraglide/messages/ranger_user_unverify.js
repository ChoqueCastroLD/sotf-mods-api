/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_UnverifyInputs */

const en_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove trusted`)
};

const es_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar estado de confianza`)
};

const de_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrauensstatus entfernen`)
};

const fr_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer le statut`)
};

const it_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Togli lo stato`)
};

const nl_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrouwen intrekken`)
};

const pl_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odbierz status`)
};

const pt_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover status`)
};

const ru_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Снять статус`)
};

const sv_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort betrodd`)
};

const tr_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güveni kaldır`)
};

const zh_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消受信任`)
};

const ja_ranger_user_unverify = /** @type {(inputs: Ranger_User_UnverifyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信頼済みを外す`)
};

/**
* | output |
* | --- |
* | "Remove trusted" |
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
