/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Cover_SavedInputs */

const en_kits_cover_saved = /** @type {(inputs: Kits_Cover_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cover updated`)
};

const es_kits_cover_saved = /** @type {(inputs: Kits_Cover_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Portada actualizada`)
};

const de_kits_cover_saved = /** @type {(inputs: Kits_Cover_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titelbild aktualisiert`)
};

const fr_kits_cover_saved = /** @type {(inputs: Kits_Cover_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couverture mise à jour`)
};

const it_kits_cover_saved = /** @type {(inputs: Kits_Cover_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copertina aggiornata`)
};

const nl_kits_cover_saved = /** @type {(inputs: Kits_Cover_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag bijgewerkt`)
};

const pl_kits_cover_saved = /** @type {(inputs: Kits_Cover_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaktualizowano okładkę`)
};

const pt_kits_cover_saved = /** @type {(inputs: Kits_Cover_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Capa atualizada`)
};

const ru_kits_cover_saved = /** @type {(inputs: Kits_Cover_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обложка обновлена`)
};

const sv_kits_cover_saved = /** @type {(inputs: Kits_Cover_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslaget har uppdaterats`)
};

const tr_kits_cover_saved = /** @type {(inputs: Kits_Cover_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak güncellendi`)
};

const zh_kits_cover_saved = /** @type {(inputs: Kits_Cover_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`封面已更新`)
};

const ja_kits_cover_saved = /** @type {(inputs: Kits_Cover_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバーを更新しました`)
};

/**
* | output |
* | --- |
* | "Cover updated" |
*
* @param {Kits_Cover_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_saved = /** @type {((inputs?: Kits_Cover_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_saved(inputs)
	if (locale === "de") return de_kits_cover_saved(inputs)
	if (locale === "fr") return fr_kits_cover_saved(inputs)
	if (locale === "it") return it_kits_cover_saved(inputs)
	if (locale === "nl") return nl_kits_cover_saved(inputs)
	if (locale === "pl") return pl_kits_cover_saved(inputs)
	if (locale === "pt") return pt_kits_cover_saved(inputs)
	if (locale === "ru") return ru_kits_cover_saved(inputs)
	if (locale === "sv") return sv_kits_cover_saved(inputs)
	if (locale === "tr") return tr_kits_cover_saved(inputs)
	if (locale === "zh") return zh_kits_cover_saved(inputs)
	if (locale === "ja") return ja_kits_cover_saved(inputs)
	return en_kits_cover_saved(inputs)
});
