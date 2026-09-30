/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Best_Libraries_DescriptionInputs */

const en_explore_best_libraries_description = /** @type {(inputs: Explore_Best_Libraries_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The shared libraries Sons of the Forest mods depend on, ranked by downloads. Install them once, before the mods that need them.`)
};

const es_explore_best_libraries_description = /** @type {(inputs: Explore_Best_Libraries_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las librerías compartidas de las que dependen los mods de Sons of the Forest, por descargas. Instálalas una vez, antes que los mods que las usan.`)
};

const de_explore_best_libraries_description = /** @type {(inputs: Explore_Best_Libraries_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die gemeinsamen Bibliotheken, auf die Sons-of-the-Forest-Mods angewiesen sind, nach Downloads. Einmal installieren, vor den Mods, die sie nutzen.`)
};

const fr_explore_best_libraries_description = /** @type {(inputs: Explore_Best_Libraries_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les bibliothèques partagées dont dépendent les mods Sons of the Forest, par téléchargements. Installez-les une fois, avant les mods qui les utilisent.`)
};

const it_explore_best_libraries_description = /** @type {(inputs: Explore_Best_Libraries_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le librerie condivise da cui dipendono le mod di Sons of the Forest, per download. Installale una volta, prima delle mod che le usano.`)
};

const nl_explore_best_libraries_description = /** @type {(inputs: Explore_Best_Libraries_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De gedeelde bibliotheken waar Sons of the Forest-mods op leunen, op downloads. Eén keer installeren, vóór de mods die ze gebruiken.`)
};

const pl_explore_best_libraries_description = /** @type {(inputs: Explore_Best_Libraries_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wspólne biblioteki, od których zależą mody do Sons of the Forest, według pobrań. Zainstaluj je raz, przed modami, które z nich korzystają.`)
};

const pt_explore_best_libraries_description = /** @type {(inputs: Explore_Best_Libraries_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`As bibliotecas compartilhadas das quais os mods de Sons of the Forest dependem, por downloads. Instale uma vez, antes dos mods que as usam.`)
};

const ru_explore_best_libraries_description = /** @type {(inputs: Explore_Best_Libraries_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Общие библиотеки, от которых зависят моды для Sons of the Forest, по числу загрузок. Установите их один раз, до модов, которые их используют.`)
};

const sv_explore_best_libraries_description = /** @type {(inputs: Explore_Best_Libraries_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De delade bibliotek som moddar till Sons of the Forest bygger på, efter nedladdningar. Installera dem en gång, före moddarna som använder dem.`)
};

const tr_explore_best_libraries_description = /** @type {(inputs: Explore_Best_Libraries_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest modlarının ihtiyaç duyduğu ortak kütüphaneler, indirmeye göre. Onları kullanan modlardan önce bir kez kur.`)
};

const zh_explore_best_libraries_description = /** @type {(inputs: Explore_Best_Libraries_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 模组所依赖的共享前置库，按下载量排序。在使用它们的模组之前安装一次即可。`)
};

const ja_explore_best_libraries_description = /** @type {(inputs: Explore_Best_Libraries_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest の MOD が依存する共有ライブラリをダウンロード数順に。使う MOD より先に一度だけ導入します。`)
};

/**
* | output |
* | --- |
* | "The shared libraries Sons of the Forest mods depend on, ranked by downloads. Install them once, before the mods that need them." |
*
* @param {Explore_Best_Libraries_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_best_libraries_description = /** @type {((inputs?: Explore_Best_Libraries_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Best_Libraries_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_best_libraries_description(inputs)
	if (locale === "de") return de_explore_best_libraries_description(inputs)
	if (locale === "fr") return fr_explore_best_libraries_description(inputs)
	if (locale === "it") return it_explore_best_libraries_description(inputs)
	if (locale === "nl") return nl_explore_best_libraries_description(inputs)
	if (locale === "pl") return pl_explore_best_libraries_description(inputs)
	if (locale === "pt") return pt_explore_best_libraries_description(inputs)
	if (locale === "ru") return ru_explore_best_libraries_description(inputs)
	if (locale === "sv") return sv_explore_best_libraries_description(inputs)
	if (locale === "tr") return tr_explore_best_libraries_description(inputs)
	if (locale === "zh") return zh_explore_best_libraries_description(inputs)
	if (locale === "ja") return ja_explore_best_libraries_description(inputs)
	return en_explore_best_libraries_description(inputs)
});
