/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Bio_HintInputs */

const en_settings_bio_hint = /** @type {(inputs: Settings_Bio_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown works: **bold**, _italics_ and links.`)
};

const es_settings_bio_hint = /** @type {(inputs: Settings_Bio_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Admite Markdown: **negrita**, _cursiva_ y enlaces.`)
};

const de_settings_bio_hint = /** @type {(inputs: Settings_Bio_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown funktioniert: **fett**, _kursiv_ und Links.`)
};

const fr_settings_bio_hint = /** @type {(inputs: Settings_Bio_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le Markdown fonctionne : **gras**, _italique_ et liens.`)
};

const it_settings_bio_hint = /** @type {(inputs: Settings_Bio_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funziona il Markdown: **grassetto**, _corsivo_ e link.`)
};

const nl_settings_bio_hint = /** @type {(inputs: Settings_Bio_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown werkt: **vet**, _cursief_ en links.`)
};

const pl_settings_bio_hint = /** @type {(inputs: Settings_Bio_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa Markdown: **pogrubienie**, _kursywa_ i linki.`)
};

const pt_settings_bio_hint = /** @type {(inputs: Settings_Bio_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown funciona: **negrito**, _itálico_ e links.`)
};

const ru_settings_bio_hint = /** @type {(inputs: Settings_Bio_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поддерживается Markdown: **жирный**, _курсив_ и ссылки.`)
};

const sv_settings_bio_hint = /** @type {(inputs: Settings_Bio_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown fungerar: **fetstil**, _kursiv_ och länkar.`)
};

const tr_settings_bio_hint = /** @type {(inputs: Settings_Bio_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown çalışır: **kalın**, _italik_ ve bağlantılar.`)
};

const zh_settings_bio_hint = /** @type {(inputs: Settings_Bio_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`支持 Markdown：**粗体**、_斜体_ 和链接。`)
};

const ja_settings_bio_hint = /** @type {(inputs: Settings_Bio_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown が使えます：**太字**、_斜体_、リンク。`)
};

/**
* | output |
* | --- |
* | "Markdown works: **bold**, _italics_ and links." |
*
* @param {Settings_Bio_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_bio_hint = /** @type {((inputs?: Settings_Bio_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Bio_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_bio_hint(inputs)
	if (locale === "de") return de_settings_bio_hint(inputs)
	if (locale === "fr") return fr_settings_bio_hint(inputs)
	if (locale === "it") return it_settings_bio_hint(inputs)
	if (locale === "nl") return nl_settings_bio_hint(inputs)
	if (locale === "pl") return pl_settings_bio_hint(inputs)
	if (locale === "pt") return pt_settings_bio_hint(inputs)
	if (locale === "ru") return ru_settings_bio_hint(inputs)
	if (locale === "sv") return sv_settings_bio_hint(inputs)
	if (locale === "tr") return tr_settings_bio_hint(inputs)
	if (locale === "zh") return zh_settings_bio_hint(inputs)
	if (locale === "ja") return ja_settings_bio_hint(inputs)
	return en_settings_bio_hint(inputs)
});
