/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Note_PlaceholderInputs */

const en_kits_note_placeholder = /** @type {(inputs: Kits_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Set the radius to 6 in the config`)
};

const es_kits_note_placeholder = /** @type {(inputs: Kits_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pon el radio en 6 en la configuración`)
};

const de_kits_note_placeholder = /** @type {(inputs: Kits_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stell in der Konfiguration den Radius auf 6`)
};

const fr_kits_note_placeholder = /** @type {(inputs: Kits_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réglez le rayon sur 6 dans la configuration`)
};

const it_kits_note_placeholder = /** @type {(inputs: Kits_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Imposta il raggio a 6 nella configurazione`)
};

const nl_kits_note_placeholder = /** @type {(inputs: Kits_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zet de radius op 6 in de config`)
};

const pl_kits_note_placeholder = /** @type {(inputs: Kits_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ustaw promień na 6 w konfiguracji`)
};

const pt_kits_note_placeholder = /** @type {(inputs: Kits_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Defina o raio como 6 na configuração`)
};

const ru_kits_note_placeholder = /** @type {(inputs: Kits_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поставьте радиус 6 в конфиге`)
};

const sv_kits_note_placeholder = /** @type {(inputs: Kits_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sätt radien till 6 i konfigurationen`)
};

const tr_kits_note_placeholder = /** @type {(inputs: Kits_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ayarlarda yarıçapı 6 yap`)
};

const zh_kits_note_placeholder = /** @type {(inputs: Kits_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在配置中把半径设为 6`)
};

const ja_kits_note_placeholder = /** @type {(inputs: Kits_Note_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定で半径を 6 にする`)
};

/**
* | output |
* | --- |
* | "Set the radius to 6 in the config" |
*
* @param {Kits_Note_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_note_placeholder = /** @type {((inputs?: Kits_Note_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Note_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_note_placeholder(inputs)
	if (locale === "de") return de_kits_note_placeholder(inputs)
	if (locale === "fr") return fr_kits_note_placeholder(inputs)
	if (locale === "it") return it_kits_note_placeholder(inputs)
	if (locale === "nl") return nl_kits_note_placeholder(inputs)
	if (locale === "pl") return pl_kits_note_placeholder(inputs)
	if (locale === "pt") return pt_kits_note_placeholder(inputs)
	if (locale === "ru") return ru_kits_note_placeholder(inputs)
	if (locale === "sv") return sv_kits_note_placeholder(inputs)
	if (locale === "tr") return tr_kits_note_placeholder(inputs)
	if (locale === "zh") return zh_kits_note_placeholder(inputs)
	if (locale === "ja") return ja_kits_note_placeholder(inputs)
	return en_kits_note_placeholder(inputs)
});
