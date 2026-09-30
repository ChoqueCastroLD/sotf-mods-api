/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ranger_Lane_CountInputs */

const en_ranger_lane_count = /** @type {(inputs: Ranger_Lane_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} item waiting`);
	return /** @type {LocalizedString} */ (`${count__number} items waiting`)
	
};

const es_ranger_lane_count = /** @type {(inputs: Ranger_Lane_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} elemento en espera`);
	return /** @type {LocalizedString} */ (`${count__number} elementos en espera`)
	
};

const de_ranger_lane_count = /** @type {(inputs: Ranger_Lane_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Eintrag wartet`);
	return /** @type {LocalizedString} */ (`${count__number} Einträge warten`)
	
};

const fr_ranger_lane_count = /** @type {(inputs: Ranger_Lane_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} élément en attente`);
	return /** @type {LocalizedString} */ (`${count__number} éléments en attente`)
	
};

const it_ranger_lane_count = /** @type {(inputs: Ranger_Lane_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} elemento in attesa`);
	return /** @type {LocalizedString} */ (`${count__number} elementi in attesa`)
	
};

const nl_ranger_lane_count = /** @type {(inputs: Ranger_Lane_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} item wacht`);
	return /** @type {LocalizedString} */ (`${count__number} items wachten`)
	
};

const pl_ranger_lane_count = /** @type {(inputs: Ranger_Lane_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} element czeka`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} elementy czekają`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} elementów czeka`);
	return /** @type {LocalizedString} */ (`${count__number} elementu czeka`)
	
};

const pt_ranger_lane_count = /** @type {(inputs: Ranger_Lane_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} item aguardando`);
	return /** @type {LocalizedString} */ (`${count__number} itens aguardando`)
	
};

const ru_ranger_lane_count = /** @type {(inputs: Ranger_Lane_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} элемент ждёт`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} элемента ждут`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} элементов ждут`);
	return /** @type {LocalizedString} */ (`${count__number} элемента ждут`)
	
};

const sv_ranger_lane_count = /** @type {(inputs: Ranger_Lane_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} objekt väntar`);
	return /** @type {LocalizedString} */ (`${count__number} objekt väntar`)
	
};

const tr_ranger_lane_count = /** @type {(inputs: Ranger_Lane_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} öğe bekliyor`);
	return /** @type {LocalizedString} */ (`${count__number} öğe bekliyor`)
	
};

const zh_ranger_lane_count = /** @type {(inputs: Ranger_Lane_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 项等待中`)
};

const ja_ranger_lane_count = /** @type {(inputs: Ranger_Lane_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件が待機中`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} item waiting" |
* | * | "{count__number} items waiting" |
*
* @param {Ranger_Lane_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_lane_count = /** @type {((inputs: Ranger_Lane_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_lane_count(inputs)
	if (locale === "de") return de_ranger_lane_count(inputs)
	if (locale === "fr") return fr_ranger_lane_count(inputs)
	if (locale === "it") return it_ranger_lane_count(inputs)
	if (locale === "nl") return nl_ranger_lane_count(inputs)
	if (locale === "pl") return pl_ranger_lane_count(inputs)
	if (locale === "pt") return pt_ranger_lane_count(inputs)
	if (locale === "ru") return ru_ranger_lane_count(inputs)
	if (locale === "sv") return sv_ranger_lane_count(inputs)
	if (locale === "tr") return tr_ranger_lane_count(inputs)
	if (locale === "zh") return zh_ranger_lane_count(inputs)
	if (locale === "ja") return ja_ranger_lane_count(inputs)
	return en_ranger_lane_count(inputs)
});
