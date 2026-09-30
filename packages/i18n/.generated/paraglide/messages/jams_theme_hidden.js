/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Theme_HiddenInputs */

const en_jams_theme_hidden = /** @type {(inputs: Jams_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The theme is a secret until submissions open.`)
};

const es_jams_theme_hidden = /** @type {(inputs: Jams_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El tema es secreto hasta que se abran las inscripciones.`)
};

const de_jams_theme_hidden = /** @type {(inputs: Jams_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Thema bleibt geheim, bis die Einreichungen starten.`)
};

const fr_jams_theme_hidden = /** @type {(inputs: Jams_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le thème reste secret jusqu'à l'ouverture des participations.`)
};

const it_jams_theme_hidden = /** @type {(inputs: Jams_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tema resta segreto fino all'apertura delle iscrizioni.`)
};

const nl_jams_theme_hidden = /** @type {(inputs: Jams_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het thema blijft geheim tot de inzendingen openen.`)
};

const pl_jams_theme_hidden = /** @type {(inputs: Jams_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temat pozostaje tajny do otwarcia zgłoszeń.`)
};

const pt_jams_theme_hidden = /** @type {(inputs: Jams_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O tema é secreto até as inscrições abrirem.`)
};

const ru_jams_theme_hidden = /** @type {(inputs: Jams_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тема хранится в секрете до начала приёма работ.`)
};

const sv_jams_theme_hidden = /** @type {(inputs: Jams_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temat är hemligt tills bidragen öppnar.`)
};

const tr_jams_theme_hidden = /** @type {(inputs: Jams_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tema, başvurular açılana kadar gizlidir.`)
};

const zh_jams_theme_hidden = /** @type {(inputs: Jams_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主题将在开始投稿时揭晓。`)
};

const ja_jams_theme_hidden = /** @type {(inputs: Jams_Theme_HiddenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テーマは応募開始まで非公開です。`)
};

/**
* | output |
* | --- |
* | "The theme is a secret until submissions open." |
*
* @param {Jams_Theme_HiddenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_theme_hidden = /** @type {((inputs?: Jams_Theme_HiddenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Theme_HiddenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_theme_hidden(inputs)
	if (locale === "de") return de_jams_theme_hidden(inputs)
	if (locale === "fr") return fr_jams_theme_hidden(inputs)
	if (locale === "it") return it_jams_theme_hidden(inputs)
	if (locale === "nl") return nl_jams_theme_hidden(inputs)
	if (locale === "pl") return pl_jams_theme_hidden(inputs)
	if (locale === "pt") return pt_jams_theme_hidden(inputs)
	if (locale === "ru") return ru_jams_theme_hidden(inputs)
	if (locale === "sv") return sv_jams_theme_hidden(inputs)
	if (locale === "tr") return tr_jams_theme_hidden(inputs)
	if (locale === "zh") return zh_jams_theme_hidden(inputs)
	if (locale === "ja") return ja_jams_theme_hidden(inputs)
	return en_jams_theme_hidden(inputs)
});
