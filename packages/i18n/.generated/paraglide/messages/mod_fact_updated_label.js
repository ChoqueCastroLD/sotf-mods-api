/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Fact_Updated_LabelInputs */

const en_mod_fact_updated_label = /** @type {(inputs: Mod_Fact_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updated`)
};

const es_mod_fact_updated_label = /** @type {(inputs: Mod_Fact_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizado`)
};

const de_mod_fact_updated_label = /** @type {(inputs: Mod_Fact_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualisiert`)
};

const fr_mod_fact_updated_label = /** @type {(inputs: Mod_Fact_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis à jour`)
};

const it_mod_fact_updated_label = /** @type {(inputs: Mod_Fact_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornata`)
};

const nl_mod_fact_updated_label = /** @type {(inputs: Mod_Fact_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijgewerkt`)
};

const pl_mod_fact_updated_label = /** @type {(inputs: Mod_Fact_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaktualizowano`)
};

const pt_mod_fact_updated_label = /** @type {(inputs: Mod_Fact_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizado`)
};

const ru_mod_fact_updated_label = /** @type {(inputs: Mod_Fact_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновлён`)
};

const sv_mod_fact_updated_label = /** @type {(inputs: Mod_Fact_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdaterad`)
};

const tr_mod_fact_updated_label = /** @type {(inputs: Mod_Fact_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncellendi`)
};

const zh_mod_fact_updated_label = /** @type {(inputs: Mod_Fact_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新于`)
};

const ja_mod_fact_updated_label = /** @type {(inputs: Mod_Fact_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新日`)
};

/**
* | output |
* | --- |
* | "Updated" |
*
* @param {Mod_Fact_Updated_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_fact_updated_label = /** @type {((inputs?: Mod_Fact_Updated_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Fact_Updated_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_fact_updated_label(inputs)
	if (locale === "de") return de_mod_fact_updated_label(inputs)
	if (locale === "fr") return fr_mod_fact_updated_label(inputs)
	if (locale === "it") return it_mod_fact_updated_label(inputs)
	if (locale === "nl") return nl_mod_fact_updated_label(inputs)
	if (locale === "pl") return pl_mod_fact_updated_label(inputs)
	if (locale === "pt") return pt_mod_fact_updated_label(inputs)
	if (locale === "ru") return ru_mod_fact_updated_label(inputs)
	if (locale === "sv") return sv_mod_fact_updated_label(inputs)
	if (locale === "tr") return tr_mod_fact_updated_label(inputs)
	if (locale === "zh") return zh_mod_fact_updated_label(inputs)
	if (locale === "ja") return ja_mod_fact_updated_label(inputs)
	return en_mod_fact_updated_label(inputs)
});
