/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Basecamp_Compat_Tested_SavedInputs */

const en_basecamp_compat_tested_saved = /** @type {(inputs: Basecamp_Compat_Tested_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tested builds of v${i?.version} saved`)
};

const es_basecamp_compat_tested_saved = /** @type {(inputs: Basecamp_Compat_Tested_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Builds probadas de la v${i?.version} guardadas`)
};

const de_basecamp_compat_tested_saved = /** @type {(inputs: Basecamp_Compat_Tested_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Getestete Builds von v${i?.version} gespeichert`)
};

const fr_basecamp_compat_tested_saved = /** @type {(inputs: Basecamp_Compat_Tested_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Builds testés de la v${i?.version} enregistrés`)
};

const it_basecamp_compat_tested_saved = /** @type {(inputs: Basecamp_Compat_Tested_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Build testate della v${i?.version} salvate`)
};

const nl_basecamp_compat_tested_saved = /** @type {(inputs: Basecamp_Compat_Tested_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geteste builds van v${i?.version} opgeslagen`)
};

const pl_basecamp_compat_tested_saved = /** @type {(inputs: Basecamp_Compat_Tested_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zapisano przetestowane buildy v${i?.version}`)
};

const pt_basecamp_compat_tested_saved = /** @type {(inputs: Basecamp_Compat_Tested_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Builds testadas da v${i?.version} salvas`)
};

const ru_basecamp_compat_tested_saved = /** @type {(inputs: Basecamp_Compat_Tested_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Проверенные билды v${i?.version} сохранены`)
};

const sv_basecamp_compat_tested_saved = /** @type {(inputs: Basecamp_Compat_Tested_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Testade builds för v${i?.version} sparade`)
};

const tr_basecamp_compat_tested_saved = /** @type {(inputs: Basecamp_Compat_Tested_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} için test edilen sürümler kaydedildi`)
};

const zh_basecamp_compat_tested_saved = /** @type {(inputs: Basecamp_Compat_Tested_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已保存 v${i?.version} 的测试版本`)
};

const ja_basecamp_compat_tested_saved = /** @type {(inputs: Basecamp_Compat_Tested_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`v${i?.version} の確認済みビルドを保存しました`)
};

/**
* | output |
* | --- |
* | "Tested builds of v{version} saved" |
*
* @param {Basecamp_Compat_Tested_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_tested_saved = /** @type {((inputs: Basecamp_Compat_Tested_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Tested_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_tested_saved(inputs)
	if (locale === "de") return de_basecamp_compat_tested_saved(inputs)
	if (locale === "fr") return fr_basecamp_compat_tested_saved(inputs)
	if (locale === "it") return it_basecamp_compat_tested_saved(inputs)
	if (locale === "nl") return nl_basecamp_compat_tested_saved(inputs)
	if (locale === "pl") return pl_basecamp_compat_tested_saved(inputs)
	if (locale === "pt") return pt_basecamp_compat_tested_saved(inputs)
	if (locale === "ru") return ru_basecamp_compat_tested_saved(inputs)
	if (locale === "sv") return sv_basecamp_compat_tested_saved(inputs)
	if (locale === "tr") return tr_basecamp_compat_tested_saved(inputs)
	if (locale === "zh") return zh_basecamp_compat_tested_saved(inputs)
	if (locale === "ja") return ja_basecamp_compat_tested_saved(inputs)
	return en_basecamp_compat_tested_saved(inputs)
});
