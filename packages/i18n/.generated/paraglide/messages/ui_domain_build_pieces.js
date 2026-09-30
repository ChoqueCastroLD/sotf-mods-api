/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ui_Domain_Build_PiecesInputs */

const en_ui_domain_build_pieces = /** @type {(inputs: Ui_Domain_Build_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} piece`);
	return /** @type {LocalizedString} */ (`${count__number} pieces`)
	
};

const es_ui_domain_build_pieces = /** @type {(inputs: Ui_Domain_Build_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} pieza`);
	return /** @type {LocalizedString} */ (`${count__number} piezas`)
	
};

const de_ui_domain_build_pieces = /** @type {(inputs: Ui_Domain_Build_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Teil`);
	return /** @type {LocalizedString} */ (`${count__number} Teile`)
	
};

const fr_ui_domain_build_pieces = /** @type {(inputs: Ui_Domain_Build_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} pièce`);
	return /** @type {LocalizedString} */ (`${count__number} pièces`)
	
};

const it_ui_domain_build_pieces = /** @type {(inputs: Ui_Domain_Build_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} pezzo`);
	return /** @type {LocalizedString} */ (`${count__number} pezzi`)
	
};

const nl_ui_domain_build_pieces = /** @type {(inputs: Ui_Domain_Build_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} onderdeel`);
	return /** @type {LocalizedString} */ (`${count__number} onderdelen`)
	
};

const pl_ui_domain_build_pieces = /** @type {(inputs: Ui_Domain_Build_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} element`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} elementy`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} elementów`);
	return /** @type {LocalizedString} */ (`${count__number} elementu`)
	
};

const pt_ui_domain_build_pieces = /** @type {(inputs: Ui_Domain_Build_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} peça`);
	return /** @type {LocalizedString} */ (`${count__number} peças`)
	
};

const ru_ui_domain_build_pieces = /** @type {(inputs: Ui_Domain_Build_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} деталь`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} детали`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} деталей`);
	return /** @type {LocalizedString} */ (`${count__number} детали`)
	
};

const sv_ui_domain_build_pieces = /** @type {(inputs: Ui_Domain_Build_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} del`);
	return /** @type {LocalizedString} */ (`${count__number} delar`)
	
};

const tr_ui_domain_build_pieces = /** @type {(inputs: Ui_Domain_Build_PiecesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} parça`);
	return /** @type {LocalizedString} */ (`${count__number} parça`)
	
};

const zh_ui_domain_build_pieces = /** @type {(inputs: Ui_Domain_Build_PiecesInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个构件`)
};

const ja_ui_domain_build_pieces = /** @type {(inputs: Ui_Domain_Build_PiecesInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} パーツ`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} piece" |
* | * | "{count__number} pieces" |
*
* @param {Ui_Domain_Build_PiecesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_build_pieces = /** @type {((inputs: Ui_Domain_Build_PiecesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Build_PiecesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_build_pieces(inputs)
	if (locale === "de") return de_ui_domain_build_pieces(inputs)
	if (locale === "fr") return fr_ui_domain_build_pieces(inputs)
	if (locale === "it") return it_ui_domain_build_pieces(inputs)
	if (locale === "nl") return nl_ui_domain_build_pieces(inputs)
	if (locale === "pl") return pl_ui_domain_build_pieces(inputs)
	if (locale === "pt") return pt_ui_domain_build_pieces(inputs)
	if (locale === "ru") return ru_ui_domain_build_pieces(inputs)
	if (locale === "sv") return sv_ui_domain_build_pieces(inputs)
	if (locale === "tr") return tr_ui_domain_build_pieces(inputs)
	if (locale === "zh") return zh_ui_domain_build_pieces(inputs)
	if (locale === "ja") return ja_ui_domain_build_pieces(inputs)
	return en_ui_domain_build_pieces(inputs)
});
