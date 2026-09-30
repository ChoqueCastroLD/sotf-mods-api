/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Categories_DescriptionInputs */

const en_jams_editor_categories_description = /** @type {(inputs: Jams_Editor_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Each category is rated 1 to 5 stars. The weight sets how much it counts towards the overall score.`)
};

const es_jams_editor_categories_description = /** @type {(inputs: Jams_Editor_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada categoría se valora de 1 a 5 estrellas. El peso define cuánto cuenta en la puntuación general.`)
};

const de_jams_editor_categories_description = /** @type {(inputs: Jams_Editor_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jede Kategorie wird mit 1 bis 5 Sternen bewertet. Die Gewichtung bestimmt, wie stark sie in die Gesamtwertung eingeht.`)
};

const fr_jams_editor_categories_description = /** @type {(inputs: Jams_Editor_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chaque catégorie est notée de 1 à 5 étoiles. Le poids fixe son importance dans la note générale.`)
};

const it_jams_editor_categories_description = /** @type {(inputs: Jams_Editor_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogni categoria si valuta da 1 a 5 stelle. Il peso stabilisce quanto conta nel punteggio complessivo.`)
};

const nl_jams_editor_categories_description = /** @type {(inputs: Jams_Editor_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke categorie wordt met 1 tot 5 sterren beoordeeld. Het gewicht bepaalt hoe zwaar ze meetelt in de totaalscore.`)
};

const pl_jams_editor_categories_description = /** @type {(inputs: Jams_Editor_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Każda kategoria jest oceniana od 1 do 5 gwiazdek. Waga określa, jak mocno liczy się w ocenie ogólnej.`)
};

const pt_jams_editor_categories_description = /** @type {(inputs: Jams_Editor_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cada categoria é avaliada de 1 a 5 estrelas. O peso define quanto conta na nota geral.`)
};

const ru_jams_editor_categories_description = /** @type {(inputs: Jams_Editor_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Каждая категория оценивается от 1 до 5 звёзд. Вес определяет её вклад в общий балл.`)
};

const sv_jams_editor_categories_description = /** @type {(inputs: Jams_Editor_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Varje kategori betygsätts med 1 till 5 stjärnor. Vikten styr hur mycket den räknas i totalpoängen.`)
};

const tr_jams_editor_categories_description = /** @type {(inputs: Jams_Editor_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her kategori 1 ile 5 yıldız arasında puanlanır. Ağırlık, genel puana ne kadar katkı yapacağını belirler.`)
};

const zh_jams_editor_categories_description = /** @type {(inputs: Jams_Editor_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每个类别按 1 到 5 星评分。权重决定其在总分中的占比。`)
};

const ja_jams_editor_categories_description = /** @type {(inputs: Jams_Editor_Categories_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各カテゴリは1〜5つ星で評価されます。重みは総合スコアへの影響度です。`)
};

/**
* | output |
* | --- |
* | "Each category is rated 1 to 5 stars. The weight sets how much it counts towards the overall score." |
*
* @param {Jams_Editor_Categories_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_categories_description = /** @type {((inputs?: Jams_Editor_Categories_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Categories_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_categories_description(inputs)
	if (locale === "de") return de_jams_editor_categories_description(inputs)
	if (locale === "fr") return fr_jams_editor_categories_description(inputs)
	if (locale === "it") return it_jams_editor_categories_description(inputs)
	if (locale === "nl") return nl_jams_editor_categories_description(inputs)
	if (locale === "pl") return pl_jams_editor_categories_description(inputs)
	if (locale === "pt") return pt_jams_editor_categories_description(inputs)
	if (locale === "ru") return ru_jams_editor_categories_description(inputs)
	if (locale === "sv") return sv_jams_editor_categories_description(inputs)
	if (locale === "tr") return tr_jams_editor_categories_description(inputs)
	if (locale === "zh") return zh_jams_editor_categories_description(inputs)
	if (locale === "ja") return ja_jams_editor_categories_description(inputs)
	return en_jams_editor_categories_description(inputs)
});
