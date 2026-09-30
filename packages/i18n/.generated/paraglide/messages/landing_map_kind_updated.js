/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Map_Kind_UpdatedInputs */

const en_landing_map_kind_updated = /** @type {(inputs: Landing_Map_Kind_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updated`)
};

const es_landing_map_kind_updated = /** @type {(inputs: Landing_Map_Kind_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizado`)
};

const de_landing_map_kind_updated = /** @type {(inputs: Landing_Map_Kind_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualisiert`)
};

const fr_landing_map_kind_updated = /** @type {(inputs: Landing_Map_Kind_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis à jour`)
};

const it_landing_map_kind_updated = /** @type {(inputs: Landing_Map_Kind_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornato`)
};

const nl_landing_map_kind_updated = /** @type {(inputs: Landing_Map_Kind_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijgewerkt`)
};

const pl_landing_map_kind_updated = /** @type {(inputs: Landing_Map_Kind_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaktualizowany`)
};

const pt_landing_map_kind_updated = /** @type {(inputs: Landing_Map_Kind_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizado`)
};

const ru_landing_map_kind_updated = /** @type {(inputs: Landing_Map_Kind_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обновлён`)
};

const sv_landing_map_kind_updated = /** @type {(inputs: Landing_Map_Kind_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppdaterad`)
};

const tr_landing_map_kind_updated = /** @type {(inputs: Landing_Map_Kind_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güncellendi`)
};

const zh_landing_map_kind_updated = /** @type {(inputs: Landing_Map_Kind_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已更新`)
};

const ja_landing_map_kind_updated = /** @type {(inputs: Landing_Map_Kind_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新`)
};

/**
* | output |
* | --- |
* | "Updated" |
*
* @param {Landing_Map_Kind_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_map_kind_updated = /** @type {((inputs?: Landing_Map_Kind_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Map_Kind_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_map_kind_updated(inputs)
	if (locale === "de") return de_landing_map_kind_updated(inputs)
	if (locale === "fr") return fr_landing_map_kind_updated(inputs)
	if (locale === "it") return it_landing_map_kind_updated(inputs)
	if (locale === "nl") return nl_landing_map_kind_updated(inputs)
	if (locale === "pl") return pl_landing_map_kind_updated(inputs)
	if (locale === "pt") return pt_landing_map_kind_updated(inputs)
	if (locale === "ru") return ru_landing_map_kind_updated(inputs)
	if (locale === "sv") return sv_landing_map_kind_updated(inputs)
	if (locale === "tr") return tr_landing_map_kind_updated(inputs)
	if (locale === "zh") return zh_landing_map_kind_updated(inputs)
	if (locale === "ja") return ja_landing_map_kind_updated(inputs)
	return en_landing_map_kind_updated(inputs)
});
