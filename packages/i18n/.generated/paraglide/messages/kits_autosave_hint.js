/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ revision: NonNullable<unknown> }} Kits_Autosave_HintInputs */

const en_kits_autosave_hint = /** @type {(inputs: Kits_Autosave_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Changes save on their own · rev ${i?.revision}`)
};

const es_kits_autosave_hint = /** @type {(inputs: Kits_Autosave_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Los cambios se guardan solos · rev. ${i?.revision}`)
};

const de_kits_autosave_hint = /** @type {(inputs: Kits_Autosave_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Änderungen werden automatisch gespeichert · Rev. ${i?.revision}`)
};

const fr_kits_autosave_hint = /** @type {(inputs: Kits_Autosave_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Les modifications s’enregistrent toutes seules · rév. ${i?.revision}`)
};

const it_kits_autosave_hint = /** @type {(inputs: Kits_Autosave_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Le modifiche si salvano da sole · rev. ${i?.revision}`)
};

const nl_kits_autosave_hint = /** @type {(inputs: Kits_Autosave_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wijzigingen worden vanzelf opgeslagen · rev. ${i?.revision}`)
};

const pl_kits_autosave_hint = /** @type {(inputs: Kits_Autosave_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zmiany zapisują się same · wer. ${i?.revision}`)
};

const pt_kits_autosave_hint = /** @type {(inputs: Kits_Autosave_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`As alterações são salvas sozinhas · rev. ${i?.revision}`)
};

const ru_kits_autosave_hint = /** @type {(inputs: Kits_Autosave_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Изменения сохраняются автоматически · ред. ${i?.revision}`)
};

const sv_kits_autosave_hint = /** @type {(inputs: Kits_Autosave_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ändringar sparas automatiskt · rev. ${i?.revision}`)
};

const tr_kits_autosave_hint = /** @type {(inputs: Kits_Autosave_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Değişiklikler otomatik kaydedilir · rev. ${i?.revision}`)
};

const zh_kits_autosave_hint = /** @type {(inputs: Kits_Autosave_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`更改会自动保存 · 第 ${i?.revision} 版`)
};

const ja_kits_autosave_hint = /** @type {(inputs: Kits_Autosave_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`変更は自動保存されます · rev. ${i?.revision}`)
};

/**
* | output |
* | --- |
* | "Changes save on their own · rev {revision}" |
*
* @param {Kits_Autosave_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_autosave_hint = /** @type {((inputs: Kits_Autosave_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Autosave_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_autosave_hint(inputs)
	if (locale === "de") return de_kits_autosave_hint(inputs)
	if (locale === "fr") return fr_kits_autosave_hint(inputs)
	if (locale === "it") return it_kits_autosave_hint(inputs)
	if (locale === "nl") return nl_kits_autosave_hint(inputs)
	if (locale === "pl") return pl_kits_autosave_hint(inputs)
	if (locale === "pt") return pt_kits_autosave_hint(inputs)
	if (locale === "ru") return ru_kits_autosave_hint(inputs)
	if (locale === "sv") return sv_kits_autosave_hint(inputs)
	if (locale === "tr") return tr_kits_autosave_hint(inputs)
	if (locale === "zh") return zh_kits_autosave_hint(inputs)
	if (locale === "ja") return ja_kits_autosave_hint(inputs)
	return en_kits_autosave_hint(inputs)
});
