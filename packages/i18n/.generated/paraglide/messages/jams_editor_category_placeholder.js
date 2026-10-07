/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Category_PlaceholderInputs */

const en_jams_editor_category_placeholder = /** @type {(inputs: Jams_Editor_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For example, Best use of the theme`)
};

const es_jams_editor_category_placeholder = /** @type {(inputs: Jams_Editor_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por ejemplo: Mejor uso del tema`)
};

const de_jams_editor_category_placeholder = /** @type {(inputs: Jams_Editor_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zum Beispiel: Beste Umsetzung des Themas`)
};

const fr_jams_editor_category_placeholder = /** @type {(inputs: Jams_Editor_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Par exemple : Meilleure utilisation du thème`)
};

const it_jams_editor_category_placeholder = /** @type {(inputs: Jams_Editor_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per esempio: Miglior uso del tema`)
};

const nl_jams_editor_category_placeholder = /** @type {(inputs: Jams_Editor_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bijvoorbeeld: Beste gebruik van het thema`)
};

const pl_jams_editor_category_placeholder = /** @type {(inputs: Jams_Editor_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na przykład: Najlepsze wykorzystanie tematu`)
};

const pt_jams_editor_category_placeholder = /** @type {(inputs: Jams_Editor_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por exemplo: Melhor uso do tema`)
};

const ru_jams_editor_category_placeholder = /** @type {(inputs: Jams_Editor_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Например: лучшее использование темы`)
};

const sv_jams_editor_category_placeholder = /** @type {(inputs: Jams_Editor_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Till exempel: Bäst användning av temat`)
};

const tr_jams_editor_category_placeholder = /** @type {(inputs: Jams_Editor_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Örneğin: Temanın en iyi kullanımı`)
};

const zh_jams_editor_category_placeholder = /** @type {(inputs: Jams_Editor_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例如：最佳主题运用`)
};

const ja_jams_editor_category_placeholder = /** @type {(inputs: Jams_Editor_Category_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`例: テーマの活かし方`)
};

/**
* | output |
* | --- |
* | "For example, Best use of the theme" |
*
* @param {Jams_Editor_Category_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_category_placeholder = /** @type {((inputs?: Jams_Editor_Category_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Category_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_category_placeholder(inputs)
	if (locale === "de") return de_jams_editor_category_placeholder(inputs)
	if (locale === "fr") return fr_jams_editor_category_placeholder(inputs)
	if (locale === "it") return it_jams_editor_category_placeholder(inputs)
	if (locale === "nl") return nl_jams_editor_category_placeholder(inputs)
	if (locale === "pl") return pl_jams_editor_category_placeholder(inputs)
	if (locale === "pt") return pt_jams_editor_category_placeholder(inputs)
	if (locale === "ru") return ru_jams_editor_category_placeholder(inputs)
	if (locale === "sv") return sv_jams_editor_category_placeholder(inputs)
	if (locale === "tr") return tr_jams_editor_category_placeholder(inputs)
	if (locale === "zh") return zh_jams_editor_category_placeholder(inputs)
	if (locale === "ja") return ja_jams_editor_category_placeholder(inputs)
	return en_jams_editor_category_placeholder(inputs)
});
