/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Stat_UpdatedInputs */

const en_modpacks_stat_updated = /** @type {(inputs: Modpacks_Stat_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updated`)
};

const es_modpacks_stat_updated = /** @type {(inputs: Modpacks_Stat_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizado`)
};

const de_modpacks_stat_updated = /** @type {(inputs: Modpacks_Stat_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualisiert`)
};

const fr_modpacks_stat_updated = /** @type {(inputs: Modpacks_Stat_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis à jour`)
};

const it_modpacks_stat_updated = /** @type {(inputs: Modpacks_Stat_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornato`)
};

const nl_modpacks_stat_updated = /** @type {(inputs: Modpacks_Stat_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijgewerkt`)
};

const pl_modpacks_stat_updated = /** @type {(inputs: Modpacks_Stat_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualizacja`)
};

const pt_modpacks_stat_updated = /** @type {(inputs: Modpacks_Stat_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizado`)
};

const ru_modpacks_stat_updated = /** @type {(inputs: Modpacks_Stat_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновлён`)
};

const sv_modpacks_stat_updated = /** @type {(inputs: Modpacks_Stat_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdaterad`)
};

const tr_modpacks_stat_updated = /** @type {(inputs: Modpacks_Stat_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncellendi`)
};

const zh_modpacks_stat_updated = /** @type {(inputs: Modpacks_Stat_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新于`)
};

const ja_modpacks_stat_updated = /** @type {(inputs: Modpacks_Stat_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新日`)
};

/**
* | output |
* | --- |
* | "Updated" |
*
* @param {Modpacks_Stat_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_stat_updated = /** @type {((inputs?: Modpacks_Stat_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Stat_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_stat_updated(inputs)
	if (locale === "de") return de_modpacks_stat_updated(inputs)
	if (locale === "fr") return fr_modpacks_stat_updated(inputs)
	if (locale === "it") return it_modpacks_stat_updated(inputs)
	if (locale === "nl") return nl_modpacks_stat_updated(inputs)
	if (locale === "pl") return pl_modpacks_stat_updated(inputs)
	if (locale === "pt") return pt_modpacks_stat_updated(inputs)
	if (locale === "ru") return ru_modpacks_stat_updated(inputs)
	if (locale === "sv") return sv_modpacks_stat_updated(inputs)
	if (locale === "tr") return tr_modpacks_stat_updated(inputs)
	if (locale === "zh") return zh_modpacks_stat_updated(inputs)
	if (locale === "ja") return ja_modpacks_stat_updated(inputs)
	return en_modpacks_stat_updated(inputs)
});
