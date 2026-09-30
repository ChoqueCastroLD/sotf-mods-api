/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Basecamp_Mods_ResultsInputs */

const en_basecamp_mods_results = /** @type {(inputs: Basecamp_Mods_ResultsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`No mods match`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod shown`);
	return /** @type {LocalizedString} */ (`${count__number} mods shown`)
	
};

const es_basecamp_mods_results = /** @type {(inputs: Basecamp_Mods_ResultsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Ningún mod coincide`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod mostrado`);
	return /** @type {LocalizedString} */ (`${count__number} mods mostrados`)
	
};

const de_basecamp_mods_results = /** @type {(inputs: Basecamp_Mods_ResultsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Kein Mod passt`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Mod angezeigt`);
	return /** @type {LocalizedString} */ (`${count__number} Mods angezeigt`)
	
};

const fr_basecamp_mods_results = /** @type {(inputs: Basecamp_Mods_ResultsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Aucun mod ne correspond`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod affiché`);
	return /** @type {LocalizedString} */ (`${count__number} mods affichés`)
	
};

const it_basecamp_mods_results = /** @type {(inputs: Basecamp_Mods_ResultsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nessuna mod corrisponde`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod mostrata`);
	return /** @type {LocalizedString} */ (`${count__number} mod mostrate`)
	
};

const nl_basecamp_mods_results = /** @type {(inputs: Basecamp_Mods_ResultsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Geen mods gevonden`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod getoond`);
	return /** @type {LocalizedString} */ (`${count__number} mods getoond`)
	
};

const pl_basecamp_mods_results = /** @type {(inputs: Basecamp_Mods_ResultsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Żaden mod nie pasuje`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Wyświetlono ${count__number} mod`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Wyświetlono ${count__number} mody`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Wyświetlono ${count__number} modów`);
	return /** @type {LocalizedString} */ (`Wyświetlono ${count__number} moda`)
	
};

const pt_basecamp_mods_results = /** @type {(inputs: Basecamp_Mods_ResultsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nenhum mod corresponde`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod exibido`);
	return /** @type {LocalizedString} */ (`${count__number} mods exibidos`)
	
};

const ru_basecamp_mods_results = /** @type {(inputs: Basecamp_Mods_ResultsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Нет подходящих модов`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Показан ${count__number} мод`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Показано ${count__number} мода`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Показано ${count__number} модов`);
	return /** @type {LocalizedString} */ (`Показано ${count__number} мода`)
	
};

const sv_basecamp_mods_results = /** @type {(inputs: Basecamp_Mods_ResultsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Inga moddar matchar`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod visas`);
	return /** @type {LocalizedString} */ (`${count__number} moddar visas`)
	
};

const tr_basecamp_mods_results = /** @type {(inputs: Basecamp_Mods_ResultsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Eşleşen mod yok`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod gösteriliyor`);
	return /** @type {LocalizedString} */ (`${count__number} mod gösteriliyor`)
	
};

const zh_basecamp_mods_results = /** @type {(inputs: Basecamp_Mods_ResultsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`没有匹配的模组`);
	return /** @type {LocalizedString} */ (`显示 ${count__number} 个模组`)
	
};

const ja_basecamp_mods_results = /** @type {(inputs: Basecamp_Mods_ResultsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`一致する MOD はありません`);
	return /** @type {LocalizedString} */ (`${count__number} 件の MOD を表示中`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "No mods match" |
* | * | "one" | "{count__number} mod shown" |
* | * | * | "{count__number} mods shown" |
*
* @param {Basecamp_Mods_ResultsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_results = /** @type {((inputs: Basecamp_Mods_ResultsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_ResultsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_results(inputs)
	if (locale === "de") return de_basecamp_mods_results(inputs)
	if (locale === "fr") return fr_basecamp_mods_results(inputs)
	if (locale === "it") return it_basecamp_mods_results(inputs)
	if (locale === "nl") return nl_basecamp_mods_results(inputs)
	if (locale === "pl") return pl_basecamp_mods_results(inputs)
	if (locale === "pt") return pt_basecamp_mods_results(inputs)
	if (locale === "ru") return ru_basecamp_mods_results(inputs)
	if (locale === "sv") return sv_basecamp_mods_results(inputs)
	if (locale === "tr") return tr_basecamp_mods_results(inputs)
	if (locale === "zh") return zh_basecamp_mods_results(inputs)
	if (locale === "ja") return ja_basecamp_mods_results(inputs)
	return en_basecamp_mods_results(inputs)
});
