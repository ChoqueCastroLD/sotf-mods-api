/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Picker_PlaceholderInputs */

const en_kits_picker_placeholder = /** @type {(inputs: Kits_Picker_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search by name or manifest ID…`)
};

const es_kits_picker_placeholder = /** @type {(inputs: Kits_Picker_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busca por nombre o ID del manifiesto…`)
};

const de_kits_picker_placeholder = /** @type {(inputs: Kits_Picker_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach Name oder Manifest-ID suchen …`)
};

const fr_kits_picker_placeholder = /** @type {(inputs: Kits_Picker_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher par nom ou ID de manifeste…`)
};

const it_kits_picker_placeholder = /** @type {(inputs: Kits_Picker_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca per nome o ID del manifest…`)
};

const nl_kits_picker_placeholder = /** @type {(inputs: Kits_Picker_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek op naam of manifest-ID…`)
};

const pl_kits_picker_placeholder = /** @type {(inputs: Kits_Picker_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj po nazwie lub ID manifestu…`)
};

const pt_kits_picker_placeholder = /** @type {(inputs: Kits_Picker_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busque por nome ou ID do manifesto…`)
};

const ru_kits_picker_placeholder = /** @type {(inputs: Kits_Picker_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск по названию или ID манифеста…`)
};

const sv_kits_picker_placeholder = /** @type {(inputs: Kits_Picker_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök på namn eller manifest-id …`)
};

const tr_kits_picker_placeholder = /** @type {(inputs: Kits_Picker_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ada veya manifest kimliğine göre ara…`)
};

const zh_kits_picker_placeholder = /** @type {(inputs: Kits_Picker_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按名称或清单 ID 搜索…`)
};

const ja_kits_picker_placeholder = /** @type {(inputs: Kits_Picker_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前またはマニフェスト ID で検索…`)
};

/**
* | output |
* | --- |
* | "Search by name or manifest ID…" |
*
* @param {Kits_Picker_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_picker_placeholder = /** @type {((inputs?: Kits_Picker_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Picker_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_picker_placeholder(inputs)
	if (locale === "de") return de_kits_picker_placeholder(inputs)
	if (locale === "fr") return fr_kits_picker_placeholder(inputs)
	if (locale === "it") return it_kits_picker_placeholder(inputs)
	if (locale === "nl") return nl_kits_picker_placeholder(inputs)
	if (locale === "pl") return pl_kits_picker_placeholder(inputs)
	if (locale === "pt") return pt_kits_picker_placeholder(inputs)
	if (locale === "ru") return ru_kits_picker_placeholder(inputs)
	if (locale === "sv") return sv_kits_picker_placeholder(inputs)
	if (locale === "tr") return tr_kits_picker_placeholder(inputs)
	if (locale === "zh") return zh_kits_picker_placeholder(inputs)
	if (locale === "ja") return ja_kits_picker_placeholder(inputs)
	return en_kits_picker_placeholder(inputs)
});
