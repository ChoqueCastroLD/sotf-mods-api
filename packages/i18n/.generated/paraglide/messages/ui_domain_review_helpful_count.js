/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ui_Domain_Review_Helpful_CountInputs */

const en_ui_domain_review_helpful_count = /** @type {(inputs: Ui_Domain_Review_Helpful_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} survivor found this helpful`);
	return /** @type {LocalizedString} */ (`${count__number} survivors found this helpful`)
	
};

const es_ui_domain_review_helpful_count = /** @type {(inputs: Ui_Domain_Review_Helpful_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`A ${count__number} superviviente le resultó útil`);
	return /** @type {LocalizedString} */ (`A ${count__number} supervivientes les resultó útil`)
	
};

const de_ui_domain_review_helpful_count = /** @type {(inputs: Ui_Domain_Review_Helpful_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Überlebender fand das hilfreich`);
	return /** @type {LocalizedString} */ (`${count__number} Überlebende fanden das hilfreich`)
	
};

const fr_ui_domain_review_helpful_count = /** @type {(inputs: Ui_Domain_Review_Helpful_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} survivant a trouvé cet avis utile`);
	return /** @type {LocalizedString} */ (`${count__number} survivants ont trouvé cet avis utile`)
	
};

const it_ui_domain_review_helpful_count = /** @type {(inputs: Ui_Domain_Review_Helpful_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sopravvissuto l’ha trovata utile`);
	return /** @type {LocalizedString} */ (`${count__number} sopravvissuti l’hanno trovata utile`)
	
};

const nl_ui_domain_review_helpful_count = /** @type {(inputs: Ui_Domain_Review_Helpful_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} overlevende vond dit nuttig`);
	return /** @type {LocalizedString} */ (`${count__number} overlevenden vonden dit nuttig`)
	
};

const pl_ui_domain_review_helpful_count = /** @type {(inputs: Ui_Domain_Review_Helpful_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ocalały uznał to za przydatne`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} ocalałych uznało to za przydatne`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} ocalałych uznało to za przydatne`);
	return /** @type {LocalizedString} */ (`${count__number} ocalałego uznało to za przydatne`)
	
};

const pt_ui_domain_review_helpful_count = /** @type {(inputs: Ui_Domain_Review_Helpful_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sobrevivente achou isto útil`);
	return /** @type {LocalizedString} */ (`${count__number} sobreviventes acharam isto útil`)
	
};

const ru_ui_domain_review_helpful_count = /** @type {(inputs: Ui_Domain_Review_Helpful_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} выживший считает это полезным`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} выживших считают это полезным`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} выживших считают это полезным`);
	return /** @type {LocalizedString} */ (`${count__number} выжившего считают это полезным`)
	
};

const sv_ui_domain_review_helpful_count = /** @type {(inputs: Ui_Domain_Review_Helpful_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} överlevare tyckte att detta var till hjälp`);
	return /** @type {LocalizedString} */ (`${count__number} överlevare tyckte att detta var till hjälp`)
	
};

const tr_ui_domain_review_helpful_count = /** @type {(inputs: Ui_Domain_Review_Helpful_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} hayatta kalan bunu faydalı buldu`);
	return /** @type {LocalizedString} */ (`${count__number} hayatta kalan bunu faydalı buldu`)
	
};

const zh_ui_domain_review_helpful_count = /** @type {(inputs: Ui_Domain_Review_Helpful_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 位幸存者觉得有帮助`)
};

const ja_ui_domain_review_helpful_count = /** @type {(inputs: Ui_Domain_Review_Helpful_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 人のサバイバーが参考になったと評価`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} survivor found this helpful" |
* | * | "{count__number} survivors found this helpful" |
*
* @param {Ui_Domain_Review_Helpful_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_review_helpful_count = /** @type {((inputs: Ui_Domain_Review_Helpful_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Review_Helpful_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_review_helpful_count(inputs)
	if (locale === "de") return de_ui_domain_review_helpful_count(inputs)
	if (locale === "fr") return fr_ui_domain_review_helpful_count(inputs)
	if (locale === "it") return it_ui_domain_review_helpful_count(inputs)
	if (locale === "nl") return nl_ui_domain_review_helpful_count(inputs)
	if (locale === "pl") return pl_ui_domain_review_helpful_count(inputs)
	if (locale === "pt") return pt_ui_domain_review_helpful_count(inputs)
	if (locale === "ru") return ru_ui_domain_review_helpful_count(inputs)
	if (locale === "sv") return sv_ui_domain_review_helpful_count(inputs)
	if (locale === "tr") return tr_ui_domain_review_helpful_count(inputs)
	if (locale === "zh") return zh_ui_domain_review_helpful_count(inputs)
	if (locale === "ja") return ja_ui_domain_review_helpful_count(inputs)
	return en_ui_domain_review_helpful_count(inputs)
});
