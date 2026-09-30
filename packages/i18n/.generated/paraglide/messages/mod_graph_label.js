/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Mod_Graph_LabelInputs */

const en_mod_graph_label = /** @type {(inputs: Mod_Graph_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dependency graph of ${i?.name}`)
};

const es_mod_graph_label = /** @type {(inputs: Mod_Graph_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Grafo de dependencias de ${i?.name}`)
};

const de_mod_graph_label = /** @type {(inputs: Mod_Graph_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Abhängigkeitsgraph von ${i?.name}`)
};

const fr_mod_graph_label = /** @type {(inputs: Mod_Graph_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Graphe des dépendances de ${i?.name}`)
};

const it_mod_graph_label = /** @type {(inputs: Mod_Graph_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Grafo delle dipendenze di ${i?.name}`)
};

const nl_mod_graph_label = /** @type {(inputs: Mod_Graph_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Afhankelijkheidsgrafiek van ${i?.name}`)
};

const pl_mod_graph_label = /** @type {(inputs: Mod_Graph_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Graf zależności modu ${i?.name}`)
};

const pt_mod_graph_label = /** @type {(inputs: Mod_Graph_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Grafo de dependências de ${i?.name}`)
};

const ru_mod_graph_label = /** @type {(inputs: Mod_Graph_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Граф зависимостей ${i?.name}`)
};

const sv_mod_graph_label = /** @type {(inputs: Mod_Graph_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beroendegraf för ${i?.name}`)
};

const tr_mod_graph_label = /** @type {(inputs: Mod_Graph_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} bağımlılık grafiği`)
};

const zh_mod_graph_label = /** @type {(inputs: Mod_Graph_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的依赖关系图`)
};

const ja_mod_graph_label = /** @type {(inputs: Mod_Graph_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の依存関係グラフ`)
};

/**
* | output |
* | --- |
* | "Dependency graph of {name}" |
*
* @param {Mod_Graph_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_graph_label = /** @type {((inputs: Mod_Graph_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Graph_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_graph_label(inputs)
	if (locale === "de") return de_mod_graph_label(inputs)
	if (locale === "fr") return fr_mod_graph_label(inputs)
	if (locale === "it") return it_mod_graph_label(inputs)
	if (locale === "nl") return nl_mod_graph_label(inputs)
	if (locale === "pl") return pl_mod_graph_label(inputs)
	if (locale === "pt") return pt_mod_graph_label(inputs)
	if (locale === "ru") return ru_mod_graph_label(inputs)
	if (locale === "sv") return sv_mod_graph_label(inputs)
	if (locale === "tr") return tr_mod_graph_label(inputs)
	if (locale === "zh") return zh_mod_graph_label(inputs)
	if (locale === "ja") return ja_mod_graph_label(inputs)
	return en_mod_graph_label(inputs)
});
