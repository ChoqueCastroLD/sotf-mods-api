/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, display: NonNullable<unknown> }} Builds_Stat_PiecesInputs */

const en_builds_stat_pieces = /** @type {(inputs: Builds_Stat_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} piece`);
	return /** @type {LocalizedString} */ (`${i?.display} pieces`)
	
};

const es_builds_stat_pieces = /** @type {(inputs: Builds_Stat_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} pieza`);
	return /** @type {LocalizedString} */ (`${i?.display} piezas`)
	
};

const de_builds_stat_pieces = /** @type {(inputs: Builds_Stat_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} Teil`);
	return /** @type {LocalizedString} */ (`${i?.display} Teile`)
	
};

const fr_builds_stat_pieces = /** @type {(inputs: Builds_Stat_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} pièce`);
	return /** @type {LocalizedString} */ (`${i?.display} pièces`)
	
};

const it_builds_stat_pieces = /** @type {(inputs: Builds_Stat_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} pezzo`);
	return /** @type {LocalizedString} */ (`${i?.display} pezzi`)
	
};

const nl_builds_stat_pieces = /** @type {(inputs: Builds_Stat_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} onderdeel`);
	return /** @type {LocalizedString} */ (`${i?.display} onderdelen`)
	
};

const pl_builds_stat_pieces = /** @type {(inputs: Builds_Stat_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} element`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} elementy`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} elementów`);
	return /** @type {LocalizedString} */ (`${i?.display} elementu`)
	
};

const pt_builds_stat_pieces = /** @type {(inputs: Builds_Stat_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} peça`);
	return /** @type {LocalizedString} */ (`${i?.display} peças`)
	
};

const ru_builds_stat_pieces = /** @type {(inputs: Builds_Stat_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} деталь`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} детали`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} деталей`);
	return /** @type {LocalizedString} */ (`${i?.display} детали`)
	
};

const sv_builds_stat_pieces = /** @type {(inputs: Builds_Stat_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} del`);
	return /** @type {LocalizedString} */ (`${i?.display} delar`)
	
};

const tr_builds_stat_pieces = /** @type {(inputs: Builds_Stat_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} parça`);
	return /** @type {LocalizedString} */ (`${i?.display} parça`)
	
};

const zh_builds_stat_pieces = /** @type {(inputs: Builds_Stat_PiecesInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.display} 个部件`)
};

const ja_builds_stat_pieces = /** @type {(inputs: Builds_Stat_PiecesInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.display} パーツ`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{display} piece" |
* | * | "{display} pieces" |
*
* @param {Builds_Stat_PiecesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_stat_pieces = /** @type {((inputs: Builds_Stat_PiecesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Stat_PiecesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_stat_pieces(inputs)
	if (locale === "de") return de_builds_stat_pieces(inputs)
	if (locale === "fr") return fr_builds_stat_pieces(inputs)
	if (locale === "it") return it_builds_stat_pieces(inputs)
	if (locale === "nl") return nl_builds_stat_pieces(inputs)
	if (locale === "pl") return pl_builds_stat_pieces(inputs)
	if (locale === "pt") return pt_builds_stat_pieces(inputs)
	if (locale === "ru") return ru_builds_stat_pieces(inputs)
	if (locale === "sv") return sv_builds_stat_pieces(inputs)
	if (locale === "tr") return tr_builds_stat_pieces(inputs)
	if (locale === "zh") return zh_builds_stat_pieces(inputs)
	if (locale === "ja") return ja_builds_stat_pieces(inputs)
	return en_builds_stat_pieces(inputs)
});
