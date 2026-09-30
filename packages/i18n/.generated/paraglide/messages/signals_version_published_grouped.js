/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, mod: NonNullable<unknown> }} Signals_Version_Published_GroupedInputs */

const en_signals_version_published_grouped = /** @type {(inputs: Signals_Version_Published_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} new version of ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} new versions of ${i?.mod}`)
	
};

const es_signals_version_published_grouped = /** @type {(inputs: Signals_Version_Published_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} versión nueva de ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} versiones nuevas de ${i?.mod}`)
	
};

const de_signals_version_published_grouped = /** @type {(inputs: Signals_Version_Published_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} neue Version von ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} neue Versionen von ${i?.mod}`)
	
};

const fr_signals_version_published_grouped = /** @type {(inputs: Signals_Version_Published_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nouvelle version de ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nouvelles versions de ${i?.mod}`)
	
};

const it_signals_version_published_grouped = /** @type {(inputs: Signals_Version_Published_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nuova versione di ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nuove versioni di ${i?.mod}`)
	
};

const nl_signals_version_published_grouped = /** @type {(inputs: Signals_Version_Published_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nieuwe versie van ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nieuwe versies van ${i?.mod}`)
	
};

const pl_signals_version_published_grouped = /** @type {(inputs: Signals_Version_Published_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nowa wersja ${i?.mod}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} nowe wersje ${i?.mod}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} nowych wersji ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nowej wersji ${i?.mod}`)
	
};

const pt_signals_version_published_grouped = /** @type {(inputs: Signals_Version_Published_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nova versão de ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} novas versões de ${i?.mod}`)
	
};

const ru_signals_version_published_grouped = /** @type {(inputs: Signals_Version_Published_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} новая версия ${i?.mod}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} новые версии ${i?.mod}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} новых версий ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} новой версии ${i?.mod}`)
	
};

const sv_signals_version_published_grouped = /** @type {(inputs: Signals_Version_Published_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ny version av ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nya versioner av ${i?.mod}`)
	
};

const tr_signals_version_published_grouped = /** @type {(inputs: Signals_Version_Published_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} için ${count__number} yeni sürüm`);
	return /** @type {LocalizedString} */ (`${i?.mod} için ${count__number} yeni sürüm`)
	
};

const zh_signals_version_published_grouped = /** @type {(inputs: Signals_Version_Published_GroupedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.mod} 有 ${count__number} 个新版本`)
};

const ja_signals_version_published_grouped = /** @type {(inputs: Signals_Version_Published_GroupedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.mod} の新バージョン ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new version of {mod}" |
* | * | "{count__number} new versions of {mod}" |
*
* @param {Signals_Version_Published_GroupedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_version_published_grouped = /** @type {((inputs: Signals_Version_Published_GroupedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Version_Published_GroupedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_version_published_grouped(inputs)
	if (locale === "de") return de_signals_version_published_grouped(inputs)
	if (locale === "fr") return fr_signals_version_published_grouped(inputs)
	if (locale === "it") return it_signals_version_published_grouped(inputs)
	if (locale === "nl") return nl_signals_version_published_grouped(inputs)
	if (locale === "pl") return pl_signals_version_published_grouped(inputs)
	if (locale === "pt") return pt_signals_version_published_grouped(inputs)
	if (locale === "ru") return ru_signals_version_published_grouped(inputs)
	if (locale === "sv") return sv_signals_version_published_grouped(inputs)
	if (locale === "tr") return tr_signals_version_published_grouped(inputs)
	if (locale === "zh") return zh_signals_version_published_grouped(inputs)
	if (locale === "ja") return ja_signals_version_published_grouped(inputs)
	return en_signals_version_published_grouped(inputs)
});
