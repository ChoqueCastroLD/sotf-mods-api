/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Graph_TitleInputs */

const en_mod_graph_title = /** @type {(inputs: Mod_Graph_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependency graph`)
};

const es_mod_graph_title = /** @type {(inputs: Mod_Graph_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grafo de dependencias`)
};

const de_mod_graph_title = /** @type {(inputs: Mod_Graph_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abhängigkeitsgraph`)
};

const fr_mod_graph_title = /** @type {(inputs: Mod_Graph_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Graphe des dépendances`)
};

const it_mod_graph_title = /** @type {(inputs: Mod_Graph_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grafo delle dipendenze`)
};

const nl_mod_graph_title = /** @type {(inputs: Mod_Graph_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afhankelijkheidsgrafiek`)
};

const pl_mod_graph_title = /** @type {(inputs: Mod_Graph_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Graf zależności`)
};

const pt_mod_graph_title = /** @type {(inputs: Mod_Graph_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grafo de dependências`)
};

const ru_mod_graph_title = /** @type {(inputs: Mod_Graph_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Граф зависимостей`)
};

const sv_mod_graph_title = /** @type {(inputs: Mod_Graph_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beroendegraf`)
};

const tr_mod_graph_title = /** @type {(inputs: Mod_Graph_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağımlılık grafiği`)
};

const zh_mod_graph_title = /** @type {(inputs: Mod_Graph_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依赖关系图`)
};

const ja_mod_graph_title = /** @type {(inputs: Mod_Graph_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依存関係グラフ`)
};

/**
* | output |
* | --- |
* | "Dependency graph" |
*
* @param {Mod_Graph_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_graph_title = /** @type {((inputs?: Mod_Graph_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Graph_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_graph_title(inputs)
	if (locale === "de") return de_mod_graph_title(inputs)
	if (locale === "fr") return fr_mod_graph_title(inputs)
	if (locale === "it") return it_mod_graph_title(inputs)
	if (locale === "nl") return nl_mod_graph_title(inputs)
	if (locale === "pl") return pl_mod_graph_title(inputs)
	if (locale === "pt") return pt_mod_graph_title(inputs)
	if (locale === "ru") return ru_mod_graph_title(inputs)
	if (locale === "sv") return sv_mod_graph_title(inputs)
	if (locale === "tr") return tr_mod_graph_title(inputs)
	if (locale === "zh") return zh_mod_graph_title(inputs)
	if (locale === "ja") return ja_mod_graph_title(inputs)
	return en_mod_graph_title(inputs)
});
