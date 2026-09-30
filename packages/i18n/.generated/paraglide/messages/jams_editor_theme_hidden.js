/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Theme_HiddenInputs */

const en_jams_editor_theme_hidden = /** @type {(inputs: Jams_Editor_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep the theme secret until submissions open`)
};

const es_jams_editor_theme_hidden = /** @type {(inputs: Jams_Editor_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mantener el tema secreto hasta que abran las inscripciones`)
};

const de_jams_editor_theme_hidden = /** @type {(inputs: Jams_Editor_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thema bis zum Einreichungsstart geheim halten`)
};

const fr_jams_editor_theme_hidden = /** @type {(inputs: Jams_Editor_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Garder le thème secret jusqu'à l'ouverture des participations`)
};

const it_jams_editor_theme_hidden = /** @type {(inputs: Jams_Editor_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mantieni il tema segreto fino all'apertura delle iscrizioni`)
};

const nl_jams_editor_theme_hidden = /** @type {(inputs: Jams_Editor_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thema geheimhouden tot de inzendingen openen`)
};

const pl_jams_editor_theme_hidden = /** @type {(inputs: Jams_Editor_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zachowaj temat w tajemnicy do otwarcia zgłoszeń`)
};

const pt_jams_editor_theme_hidden = /** @type {(inputs: Jams_Editor_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manter o tema em segredo até as inscrições abrirem`)
};

const ru_jams_editor_theme_hidden = /** @type {(inputs: Jams_Editor_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрывать тему до начала приёма работ`)
};

const sv_jams_editor_theme_hidden = /** @type {(inputs: Jams_Editor_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Håll temat hemligt tills bidragen öppnar`)
};

const tr_jams_editor_theme_hidden = /** @type {(inputs: Jams_Editor_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvurular açılana kadar temayı gizli tut`)
};

const zh_jams_editor_theme_hidden = /** @type {(inputs: Jams_Editor_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开始投稿前保密主题`)
};

const ja_jams_editor_theme_hidden = /** @type {(inputs: Jams_Editor_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募開始までテーマを非公開にする`)
};

/**
* | output |
* | --- |
* | "Keep the theme secret until submissions open" |
*
* @param {Jams_Editor_Theme_HiddenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_theme_hidden = /** @type {((inputs?: Jams_Editor_Theme_HiddenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Theme_HiddenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_theme_hidden(inputs)
	if (locale === "de") return de_jams_editor_theme_hidden(inputs)
	if (locale === "fr") return fr_jams_editor_theme_hidden(inputs)
	if (locale === "it") return it_jams_editor_theme_hidden(inputs)
	if (locale === "nl") return nl_jams_editor_theme_hidden(inputs)
	if (locale === "pl") return pl_jams_editor_theme_hidden(inputs)
	if (locale === "pt") return pt_jams_editor_theme_hidden(inputs)
	if (locale === "ru") return ru_jams_editor_theme_hidden(inputs)
	if (locale === "sv") return sv_jams_editor_theme_hidden(inputs)
	if (locale === "tr") return tr_jams_editor_theme_hidden(inputs)
	if (locale === "zh") return zh_jams_editor_theme_hidden(inputs)
	if (locale === "ja") return ja_jams_editor_theme_hidden(inputs)
	return en_jams_editor_theme_hidden(inputs)
});
