/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ui_Domain_Reviews_StarsInputs */

const en_ui_domain_reviews_stars = /** @type {(inputs: Ui_Domain_Reviews_StarsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} star`);
	return /** @type {LocalizedString} */ (`${count__number} stars`)
	
};

const es_ui_domain_reviews_stars = /** @type {(inputs: Ui_Domain_Reviews_StarsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} estrella`);
	return /** @type {LocalizedString} */ (`${count__number} estrellas`)
	
};

const de_ui_domain_reviews_stars = /** @type {(inputs: Ui_Domain_Reviews_StarsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Stern`);
	return /** @type {LocalizedString} */ (`${count__number} Sterne`)
	
};

const fr_ui_domain_reviews_stars = /** @type {(inputs: Ui_Domain_Reviews_StarsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} étoile`);
	return /** @type {LocalizedString} */ (`${count__number} étoiles`)
	
};

const it_ui_domain_reviews_stars = /** @type {(inputs: Ui_Domain_Reviews_StarsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} stella`);
	return /** @type {LocalizedString} */ (`${count__number} stelle`)
	
};

const nl_ui_domain_reviews_stars = /** @type {(inputs: Ui_Domain_Reviews_StarsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ster`);
	return /** @type {LocalizedString} */ (`${count__number} sterren`)
	
};

const pl_ui_domain_reviews_stars = /** @type {(inputs: Ui_Domain_Reviews_StarsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} gwiazdka`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} gwiazdki`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} gwiazdek`);
	return /** @type {LocalizedString} */ (`${count__number} gwiazdki`)
	
};

const pt_ui_domain_reviews_stars = /** @type {(inputs: Ui_Domain_Reviews_StarsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} estrela`);
	return /** @type {LocalizedString} */ (`${count__number} estrelas`)
	
};

const ru_ui_domain_reviews_stars = /** @type {(inputs: Ui_Domain_Reviews_StarsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} звезда`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} звезды`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} звёзд`);
	return /** @type {LocalizedString} */ (`${count__number} звезды`)
	
};

const sv_ui_domain_reviews_stars = /** @type {(inputs: Ui_Domain_Reviews_StarsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} stjärna`);
	return /** @type {LocalizedString} */ (`${count__number} stjärnor`)
	
};

const tr_ui_domain_reviews_stars = /** @type {(inputs: Ui_Domain_Reviews_StarsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} yıldız`);
	return /** @type {LocalizedString} */ (`${count__number} yıldız`)
	
};

const zh_ui_domain_reviews_stars = /** @type {(inputs: Ui_Domain_Reviews_StarsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 星`)
};

const ja_ui_domain_reviews_stars = /** @type {(inputs: Ui_Domain_Reviews_StarsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`星 ${count__number}`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} star" |
* | * | "{count__number} stars" |
*
* @param {Ui_Domain_Reviews_StarsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_reviews_stars = /** @type {((inputs: Ui_Domain_Reviews_StarsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reviews_StarsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_reviews_stars(inputs)
	if (locale === "de") return de_ui_domain_reviews_stars(inputs)
	if (locale === "fr") return fr_ui_domain_reviews_stars(inputs)
	if (locale === "it") return it_ui_domain_reviews_stars(inputs)
	if (locale === "nl") return nl_ui_domain_reviews_stars(inputs)
	if (locale === "pl") return pl_ui_domain_reviews_stars(inputs)
	if (locale === "pt") return pt_ui_domain_reviews_stars(inputs)
	if (locale === "ru") return ru_ui_domain_reviews_stars(inputs)
	if (locale === "sv") return sv_ui_domain_reviews_stars(inputs)
	if (locale === "tr") return tr_ui_domain_reviews_stars(inputs)
	if (locale === "zh") return zh_ui_domain_reviews_stars(inputs)
	if (locale === "ja") return ja_ui_domain_reviews_stars(inputs)
	return en_ui_domain_reviews_stars(inputs)
});
