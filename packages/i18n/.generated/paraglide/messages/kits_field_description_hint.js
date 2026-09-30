/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Field_Description_HintInputs */

const en_kits_field_description_hint = /** @type {(inputs: Kits_Field_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. What the kit is for, load order tips, settings.`)
};

const es_kits_field_description_hint = /** @type {(inputs: Kits_Field_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Para qué sirve el kit, consejos de orden de carga, ajustes.`)
};

const de_kits_field_description_hint = /** @type {(inputs: Kits_Field_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Wofür das Kit ist, Tipps zur Ladereihenfolge, Einstellungen.`)
};

const fr_kits_field_description_hint = /** @type {(inputs: Kits_Field_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. À quoi sert le kit, conseils d’ordre de chargement, réglages.`)
};

const it_kits_field_description_hint = /** @type {(inputs: Kits_Field_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. A cosa serve il kit, consigli sull’ordine di caricamento, impostazioni.`)
};

const nl_kits_field_description_hint = /** @type {(inputs: Kits_Field_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Waar de kit voor is, tips over laadvolgorde, instellingen.`)
};

const pl_kits_field_description_hint = /** @type {(inputs: Kits_Field_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Do czego służy zestaw, wskazówki co do kolejności ładowania, ustawienia.`)
};

const pt_kits_field_description_hint = /** @type {(inputs: Kits_Field_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Para que serve o kit, dicas de ordem de carregamento, configurações.`)
};

const ru_kits_field_description_hint = /** @type {(inputs: Kits_Field_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Для чего набор, советы по порядку загрузки, настройки.`)
};

const sv_kits_field_description_hint = /** @type {(inputs: Kits_Field_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Vad kitet är till för, tips om laddordning, inställningar.`)
};

const tr_kits_field_description_hint = /** @type {(inputs: Kits_Field_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Kitin amacı, yükleme sırası ipuçları, ayarlar.`)
};

const zh_kits_field_description_hint = /** @type {(inputs: Kits_Field_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支持 Markdown。写写套装用途、加载顺序建议和设置。`)
};

const ja_kits_field_description_hint = /** @type {(inputs: Kits_Field_Description_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown 対応。キットの目的、読み込み順のコツ、設定など。`)
};

/**
* | output |
* | --- |
* | "Markdown. What the kit is for, load order tips, settings." |
*
* @param {Kits_Field_Description_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_field_description_hint = /** @type {((inputs?: Kits_Field_Description_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Field_Description_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_field_description_hint(inputs)
	if (locale === "de") return de_kits_field_description_hint(inputs)
	if (locale === "fr") return fr_kits_field_description_hint(inputs)
	if (locale === "it") return it_kits_field_description_hint(inputs)
	if (locale === "nl") return nl_kits_field_description_hint(inputs)
	if (locale === "pl") return pl_kits_field_description_hint(inputs)
	if (locale === "pt") return pt_kits_field_description_hint(inputs)
	if (locale === "ru") return ru_kits_field_description_hint(inputs)
	if (locale === "sv") return sv_kits_field_description_hint(inputs)
	if (locale === "tr") return tr_kits_field_description_hint(inputs)
	if (locale === "zh") return zh_kits_field_description_hint(inputs)
	if (locale === "ja") return ja_kits_field_description_hint(inputs)
	return en_kits_field_description_hint(inputs)
});
