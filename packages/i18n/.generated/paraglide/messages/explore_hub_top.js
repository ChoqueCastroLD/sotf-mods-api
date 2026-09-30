/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Hub_TopInputs */

const en_explore_hub_top = /** @type {(inputs: Explore_Hub_TopInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`The list`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`The top pick`);
	return /** @type {LocalizedString} */ (`The top ${count__number}`)
	
};

const es_explore_hub_top = /** @type {(inputs: Explore_Hub_TopInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`La lista`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`La mejor opción`);
	return /** @type {LocalizedString} */ (`Los ${count__number} mejores`)
	
};

const de_explore_hub_top = /** @type {(inputs: Explore_Hub_TopInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Die Liste`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Der Favorit`);
	return /** @type {LocalizedString} */ (`Die Top ${count__number}`)
	
};

const fr_explore_hub_top = /** @type {(inputs: Explore_Hub_TopInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`La liste`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Le meilleur choix`);
	return /** @type {LocalizedString} */ (`Le top ${count__number}`)
	
};

const it_explore_hub_top = /** @type {(inputs: Explore_Hub_TopInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`L’elenco`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`La scelta migliore`);
	return /** @type {LocalizedString} */ (`Le migliori ${count__number}`)
	
};

const nl_explore_hub_top = /** @type {(inputs: Explore_Hub_TopInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`De lijst`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`De topkeuze`);
	return /** @type {LocalizedString} */ (`De top ${count__number}`)
	
};

const pl_explore_hub_top = /** @type {(inputs: Explore_Hub_TopInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Lista`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Najlepszy wybór`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Najlepsze ${count__number}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Najlepszych ${count__number}`);
	return /** @type {LocalizedString} */ (`Najlepsze ${count__number}`)
	
};

const pt_explore_hub_top = /** @type {(inputs: Explore_Hub_TopInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`A lista`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`A melhor escolha`);
	return /** @type {LocalizedString} */ (`Os ${count__number} melhores`)
	
};

const ru_explore_hub_top = /** @type {(inputs: Explore_Hub_TopInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Список`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Лучший выбор`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Топ-${count__number}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Топ-${count__number}`);
	return /** @type {LocalizedString} */ (`Топ-${count__number}`)
	
};

const sv_explore_hub_top = /** @type {(inputs: Explore_Hub_TopInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Listan`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Toppvalet`);
	return /** @type {LocalizedString} */ (`Topp ${count__number}`)
	
};

const tr_explore_hub_top = /** @type {(inputs: Explore_Hub_TopInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Liste`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`En iyi seçim`);
	return /** @type {LocalizedString} */ (`En iyi ${count__number}`)
	
};

const zh_explore_hub_top = /** @type {(inputs: Explore_Hub_TopInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`列表`);
	return /** @type {LocalizedString} */ (`前 ${count__number} 名`)
	
};

const ja_explore_hub_top = /** @type {(inputs: Explore_Hub_TopInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`リスト`);
	return /** @type {LocalizedString} */ (`トップ ${count__number}`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "The list" |
* | * | "one" | "The top pick" |
* | * | * | "The top {count__number}" |
*
* @param {Explore_Hub_TopInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_hub_top = /** @type {((inputs: Explore_Hub_TopInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Hub_TopInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_hub_top(inputs)
	if (locale === "de") return de_explore_hub_top(inputs)
	if (locale === "fr") return fr_explore_hub_top(inputs)
	if (locale === "it") return it_explore_hub_top(inputs)
	if (locale === "nl") return nl_explore_hub_top(inputs)
	if (locale === "pl") return pl_explore_hub_top(inputs)
	if (locale === "pt") return pt_explore_hub_top(inputs)
	if (locale === "ru") return ru_explore_hub_top(inputs)
	if (locale === "sv") return sv_explore_hub_top(inputs)
	if (locale === "tr") return tr_explore_hub_top(inputs)
	if (locale === "zh") return zh_explore_hub_top(inputs)
	if (locale === "ja") return ja_explore_hub_top(inputs)
	return en_explore_hub_top(inputs)
});
