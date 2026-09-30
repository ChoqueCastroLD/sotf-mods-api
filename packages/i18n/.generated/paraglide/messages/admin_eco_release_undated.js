/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Release_UndatedInputs */

const en_admin_eco_release_undated = /** @type {(inputs: Admin_Eco_Release_UndatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No release date`)
};

const es_admin_eco_release_undated = /** @type {(inputs: Admin_Eco_Release_UndatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin fecha de publicación`)
};

const de_admin_eco_release_undated = /** @type {(inputs: Admin_Eco_Release_UndatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Veröffentlichungsdatum`)
};

const fr_admin_eco_release_undated = /** @type {(inputs: Admin_Eco_Release_UndatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sans date de sortie`)
};

const it_admin_eco_release_undated = /** @type {(inputs: Admin_Eco_Release_UndatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senza data di uscita`)
};

const nl_admin_eco_release_undated = /** @type {(inputs: Admin_Eco_Release_UndatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen releasedatum`)
};

const pl_admin_eco_release_undated = /** @type {(inputs: Admin_Eco_Release_UndatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bez daty wydania`)
};

const pt_admin_eco_release_undated = /** @type {(inputs: Admin_Eco_Release_UndatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem data de lançamento`)
};

const ru_admin_eco_release_undated = /** @type {(inputs: Admin_Eco_Release_UndatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Без даты выхода`)
};

const sv_admin_eco_release_undated = /** @type {(inputs: Admin_Eco_Release_UndatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget släppdatum`)
};

const tr_admin_eco_release_undated = /** @type {(inputs: Admin_Eco_Release_UndatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çıkış tarihi yok`)
};

const zh_admin_eco_release_undated = /** @type {(inputs: Admin_Eco_Release_UndatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无发布日期`)
};

const ja_admin_eco_release_undated = /** @type {(inputs: Admin_Eco_Release_UndatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リリース日なし`)
};

/**
* | output |
* | --- |
* | "No release date" |
*
* @param {Admin_Eco_Release_UndatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_release_undated = /** @type {((inputs?: Admin_Eco_Release_UndatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Release_UndatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_release_undated(inputs)
	if (locale === "de") return de_admin_eco_release_undated(inputs)
	if (locale === "fr") return fr_admin_eco_release_undated(inputs)
	if (locale === "it") return it_admin_eco_release_undated(inputs)
	if (locale === "nl") return nl_admin_eco_release_undated(inputs)
	if (locale === "pl") return pl_admin_eco_release_undated(inputs)
	if (locale === "pt") return pt_admin_eco_release_undated(inputs)
	if (locale === "ru") return ru_admin_eco_release_undated(inputs)
	if (locale === "sv") return sv_admin_eco_release_undated(inputs)
	if (locale === "tr") return tr_admin_eco_release_undated(inputs)
	if (locale === "zh") return zh_admin_eco_release_undated(inputs)
	if (locale === "ja") return ja_admin_eco_release_undated(inputs)
	return en_admin_eco_release_undated(inputs)
});
