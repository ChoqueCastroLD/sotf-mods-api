/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, max: NonNullable<unknown> }} Kits_Note_HintInputs */

const en_kits_note_hint = /** @type {(inputs: Kits_Note_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Shown under the mod on the kit page · ${i?.count}/${i?.max}`)
};

const es_kits_note_hint = /** @type {(inputs: Kits_Note_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Se muestra bajo el mod en la página del kit · ${i?.count}/${i?.max}`)
};

const de_kits_note_hint = /** @type {(inputs: Kits_Note_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Erscheint unter dem Mod auf der Kit-Seite · ${i?.count}/${i?.max}`)
};

const fr_kits_note_hint = /** @type {(inputs: Kits_Note_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Affichée sous le mod sur la page du kit · ${i?.count}/${i?.max}`)
};

const it_kits_note_hint = /** @type {(inputs: Kits_Note_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mostrata sotto la mod nella pagina del kit · ${i?.count}/${i?.max}`)
};

const nl_kits_note_hint = /** @type {(inputs: Kits_Note_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wordt onder de mod op de kitpagina getoond · ${i?.count}/${i?.max}`)
};

const pl_kits_note_hint = /** @type {(inputs: Kits_Note_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Widoczna pod modem na stronie zestawu · ${i?.count}/${i?.max}`)
};

const pt_kits_note_hint = /** @type {(inputs: Kits_Note_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aparece abaixo do mod na página do kit · ${i?.count}/${i?.max}`)
};

const ru_kits_note_hint = /** @type {(inputs: Kits_Note_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Показывается под модом на странице набора · ${i?.count}/${i?.max}`)
};

const sv_kits_note_hint = /** @type {(inputs: Kits_Note_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Visas under modden på kitsidan · ${i?.count}/${i?.max}`)
};

const tr_kits_note_hint = /** @type {(inputs: Kits_Note_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kit sayfasında modun altında gösterilir · ${i?.count}/${i?.max}`)
};

const zh_kits_note_hint = /** @type {(inputs: Kits_Note_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`显示在套装页面的模组下方 · ${i?.count}/${i?.max}`)
};

const ja_kits_note_hint = /** @type {(inputs: Kits_Note_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`キットページの MOD の下に表示 · ${i?.count}/${i?.max}`)
};

/**
* | output |
* | --- |
* | "Shown under the mod on the kit page · {count}/{max}" |
*
* @param {Kits_Note_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_note_hint = /** @type {((inputs: Kits_Note_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Note_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_note_hint(inputs)
	if (locale === "de") return de_kits_note_hint(inputs)
	if (locale === "fr") return fr_kits_note_hint(inputs)
	if (locale === "it") return it_kits_note_hint(inputs)
	if (locale === "nl") return nl_kits_note_hint(inputs)
	if (locale === "pl") return pl_kits_note_hint(inputs)
	if (locale === "pt") return pt_kits_note_hint(inputs)
	if (locale === "ru") return ru_kits_note_hint(inputs)
	if (locale === "sv") return sv_kits_note_hint(inputs)
	if (locale === "tr") return tr_kits_note_hint(inputs)
	if (locale === "zh") return zh_kits_note_hint(inputs)
	if (locale === "ja") return ja_kits_note_hint(inputs)
	return en_kits_note_hint(inputs)
});
