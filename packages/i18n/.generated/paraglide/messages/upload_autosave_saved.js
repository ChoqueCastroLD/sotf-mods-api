/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Upload_Autosave_SavedInputs */

const en_upload_autosave_saved = /** @type {(inputs: Upload_Autosave_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Autosaved ${i?.when}`)
};

const es_upload_autosave_saved = /** @type {(inputs: Upload_Autosave_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Guardado automáticamente ${i?.when}`)
};

const de_upload_autosave_saved = /** @type {(inputs: Upload_Autosave_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Automatisch gespeichert ${i?.when}`)
};

const fr_upload_autosave_saved = /** @type {(inputs: Upload_Autosave_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Enregistré automatiquement ${i?.when}`)
};

const it_upload_autosave_saved = /** @type {(inputs: Upload_Autosave_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Salvato automaticamente ${i?.when}`)
};

const nl_upload_autosave_saved = /** @type {(inputs: Upload_Autosave_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Automatisch opgeslagen ${i?.when}`)
};

const pl_upload_autosave_saved = /** @type {(inputs: Upload_Autosave_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zapisano automatycznie ${i?.when}`)
};

const pt_upload_autosave_saved = /** @type {(inputs: Upload_Autosave_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Salvo automaticamente ${i?.when}`)
};

const ru_upload_autosave_saved = /** @type {(inputs: Upload_Autosave_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Автосохранено ${i?.when}`)
};

const sv_upload_autosave_saved = /** @type {(inputs: Upload_Autosave_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sparades automatiskt ${i?.when}`)
};

const tr_upload_autosave_saved = /** @type {(inputs: Upload_Autosave_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Otomatik kaydedildi: ${i?.when}`)
};

const zh_upload_autosave_saved = /** @type {(inputs: Upload_Autosave_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已自动保存（${i?.when}）`)
};

const ja_upload_autosave_saved = /** @type {(inputs: Upload_Autosave_SavedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`自動保存しました（${i?.when}）`)
};

/**
* | output |
* | --- |
* | "Autosaved {when}" |
*
* @param {Upload_Autosave_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_autosave_saved = /** @type {((inputs: Upload_Autosave_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Autosave_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_autosave_saved(inputs)
	if (locale === "de") return de_upload_autosave_saved(inputs)
	if (locale === "fr") return fr_upload_autosave_saved(inputs)
	if (locale === "it") return it_upload_autosave_saved(inputs)
	if (locale === "nl") return nl_upload_autosave_saved(inputs)
	if (locale === "pl") return pl_upload_autosave_saved(inputs)
	if (locale === "pt") return pt_upload_autosave_saved(inputs)
	if (locale === "ru") return ru_upload_autosave_saved(inputs)
	if (locale === "sv") return sv_upload_autosave_saved(inputs)
	if (locale === "tr") return tr_upload_autosave_saved(inputs)
	if (locale === "zh") return zh_upload_autosave_saved(inputs)
	if (locale === "ja") return ja_upload_autosave_saved(inputs)
	return en_upload_autosave_saved(inputs)
});
