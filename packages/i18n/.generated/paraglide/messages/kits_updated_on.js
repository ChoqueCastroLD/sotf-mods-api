/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Kits_Updated_OnInputs */

const en_kits_updated_on = /** @type {(inputs: Kits_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`updated ${i?.date}`)
};

const es_kits_updated_on = /** @type {(inputs: Kits_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`actualizado el ${i?.date}`)
};

const de_kits_updated_on = /** @type {(inputs: Kits_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`aktualisiert am ${i?.date}`)
};

const fr_kits_updated_on = /** @type {(inputs: Kits_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`mis à jour le ${i?.date}`)
};

const it_kits_updated_on = /** @type {(inputs: Kits_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`aggiornato il ${i?.date}`)
};

const nl_kits_updated_on = /** @type {(inputs: Kits_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`bijgewerkt op ${i?.date}`)
};

const pl_kits_updated_on = /** @type {(inputs: Kits_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`zaktualizowano ${i?.date}`)
};

const pt_kits_updated_on = /** @type {(inputs: Kits_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`atualizado em ${i?.date}`)
};

const ru_kits_updated_on = /** @type {(inputs: Kits_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`обновлён ${i?.date}`)
};

const sv_kits_updated_on = /** @type {(inputs: Kits_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`uppdaterat ${i?.date}`)
};

const tr_kits_updated_on = /** @type {(inputs: Kits_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`güncellendi: ${i?.date}`)
};

const zh_kits_updated_on = /** @type {(inputs: Kits_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`更新于 ${i?.date}`)
};

const ja_kits_updated_on = /** @type {(inputs: Kits_Updated_OnInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} 更新`)
};

/**
* | output |
* | --- |
* | "updated {date}" |
*
* @param {Kits_Updated_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_updated_on = /** @type {((inputs: Kits_Updated_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Updated_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_updated_on(inputs)
	if (locale === "de") return de_kits_updated_on(inputs)
	if (locale === "fr") return fr_kits_updated_on(inputs)
	if (locale === "it") return it_kits_updated_on(inputs)
	if (locale === "nl") return nl_kits_updated_on(inputs)
	if (locale === "pl") return pl_kits_updated_on(inputs)
	if (locale === "pt") return pt_kits_updated_on(inputs)
	if (locale === "ru") return ru_kits_updated_on(inputs)
	if (locale === "sv") return sv_kits_updated_on(inputs)
	if (locale === "tr") return tr_kits_updated_on(inputs)
	if (locale === "zh") return zh_kits_updated_on(inputs)
	if (locale === "ja") return ja_kits_updated_on(inputs)
	return en_kits_updated_on(inputs)
});
