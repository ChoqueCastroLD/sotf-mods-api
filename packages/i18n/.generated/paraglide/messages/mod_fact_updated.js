/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Mod_Fact_UpdatedInputs */

const en_mod_fact_updated = /** @type {(inputs: Mod_Fact_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Updated ${i?.date}`)
};

const es_mod_fact_updated = /** @type {(inputs: Mod_Fact_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Actualizado el ${i?.date}`)
};

const de_mod_fact_updated = /** @type {(inputs: Mod_Fact_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aktualisiert am ${i?.date}`)
};

const fr_mod_fact_updated = /** @type {(inputs: Mod_Fact_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mis à jour le ${i?.date}`)
};

const it_mod_fact_updated = /** @type {(inputs: Mod_Fact_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aggiornata il ${i?.date}`)
};

const nl_mod_fact_updated = /** @type {(inputs: Mod_Fact_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bijgewerkt op ${i?.date}`)
};

const pl_mod_fact_updated = /** @type {(inputs: Mod_Fact_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zaktualizowano ${i?.date}`)
};

const pt_mod_fact_updated = /** @type {(inputs: Mod_Fact_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Atualizado em ${i?.date}`)
};

const ru_mod_fact_updated = /** @type {(inputs: Mod_Fact_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Обновлён ${i?.date}`)
};

const sv_mod_fact_updated = /** @type {(inputs: Mod_Fact_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uppdaterad ${i?.date}`)
};

const tr_mod_fact_updated = /** @type {(inputs: Mod_Fact_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinde güncellendi`)
};

const zh_mod_fact_updated = /** @type {(inputs: Mod_Fact_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`更新于 ${i?.date}`)
};

const ja_mod_fact_updated = /** @type {(inputs: Mod_Fact_UpdatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} に更新`)
};

/**
* | output |
* | --- |
* | "Updated {date}" |
*
* @param {Mod_Fact_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_fact_updated = /** @type {((inputs: Mod_Fact_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Fact_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_fact_updated(inputs)
	if (locale === "de") return de_mod_fact_updated(inputs)
	if (locale === "fr") return fr_mod_fact_updated(inputs)
	if (locale === "it") return it_mod_fact_updated(inputs)
	if (locale === "nl") return nl_mod_fact_updated(inputs)
	if (locale === "pl") return pl_mod_fact_updated(inputs)
	if (locale === "pt") return pt_mod_fact_updated(inputs)
	if (locale === "ru") return ru_mod_fact_updated(inputs)
	if (locale === "sv") return sv_mod_fact_updated(inputs)
	if (locale === "tr") return tr_mod_fact_updated(inputs)
	if (locale === "zh") return zh_mod_fact_updated(inputs)
	if (locale === "ja") return ja_mod_fact_updated(inputs)
	return en_mod_fact_updated(inputs)
});
