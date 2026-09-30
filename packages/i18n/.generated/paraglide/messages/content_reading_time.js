/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ minutes: NonNullable<unknown> }} Content_Reading_TimeInputs */

const en_content_reading_time = /** @type {(inputs: Content_Reading_TimeInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("en", i?.minutes, {});
	const minutes__number = registry.number("en", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`${minutes__number} min read`);
	return /** @type {LocalizedString} */ (`${minutes__number} min read`)
	
};

const es_content_reading_time = /** @type {(inputs: Content_Reading_TimeInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("es", i?.minutes, {});
	const minutes__number = registry.number("es", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`${minutes__number} min de lectura`);
	return /** @type {LocalizedString} */ (`${minutes__number} min de lectura`)
	
};

const de_content_reading_time = /** @type {(inputs: Content_Reading_TimeInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("de", i?.minutes, {});
	const minutes__number = registry.number("de", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`${minutes__number} Min. Lesezeit`);
	return /** @type {LocalizedString} */ (`${minutes__number} Min. Lesezeit`)
	
};

const fr_content_reading_time = /** @type {(inputs: Content_Reading_TimeInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("fr", i?.minutes, {});
	const minutes__number = registry.number("fr", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`${minutes__number} min de lecture`);
	return /** @type {LocalizedString} */ (`${minutes__number} min de lecture`)
	
};

const it_content_reading_time = /** @type {(inputs: Content_Reading_TimeInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("it", i?.minutes, {});
	const minutes__number = registry.number("it", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`${minutes__number} min di lettura`);
	return /** @type {LocalizedString} */ (`${minutes__number} min di lettura`)
	
};

const nl_content_reading_time = /** @type {(inputs: Content_Reading_TimeInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("nl", i?.minutes, {});
	const minutes__number = registry.number("nl", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`${minutes__number} min lezen`);
	return /** @type {LocalizedString} */ (`${minutes__number} min lezen`)
	
};

const pl_content_reading_time = /** @type {(inputs: Content_Reading_TimeInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("pl", i?.minutes, {});
	const minutes__number = registry.number("pl", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`${minutes__number} min czytania`);
	if (minutes__plural === "few") return /** @type {LocalizedString} */ (`${minutes__number} min czytania`);
	if (minutes__plural === "many") return /** @type {LocalizedString} */ (`${minutes__number} min czytania`);
	return /** @type {LocalizedString} */ (`${minutes__number} min czytania`)
	
};

const pt_content_reading_time = /** @type {(inputs: Content_Reading_TimeInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("pt", i?.minutes, {});
	const minutes__number = registry.number("pt", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`${minutes__number} min de leitura`);
	return /** @type {LocalizedString} */ (`${minutes__number} min de leitura`)
	
};

const ru_content_reading_time = /** @type {(inputs: Content_Reading_TimeInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("ru", i?.minutes, {});
	const minutes__number = registry.number("ru", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`${minutes__number} мин чтения`);
	if (minutes__plural === "few") return /** @type {LocalizedString} */ (`${minutes__number} мин чтения`);
	if (minutes__plural === "many") return /** @type {LocalizedString} */ (`${minutes__number} мин чтения`);
	return /** @type {LocalizedString} */ (`${minutes__number} мин чтения`)
	
};

const sv_content_reading_time = /** @type {(inputs: Content_Reading_TimeInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("sv", i?.minutes, {});
	const minutes__number = registry.number("sv", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`${minutes__number} min läsning`);
	return /** @type {LocalizedString} */ (`${minutes__number} min läsning`)
	
};

const tr_content_reading_time = /** @type {(inputs: Content_Reading_TimeInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("tr", i?.minutes, {});
	const minutes__number = registry.number("tr", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`${minutes__number} dk okuma`);
	return /** @type {LocalizedString} */ (`${minutes__number} dk okuma`)
	
};

const zh_content_reading_time = /** @type {(inputs: Content_Reading_TimeInputs) => LocalizedString} */ (i) => {
	const minutes__plural = registry.plural("zh", i?.minutes, {});
	const minutes__number = registry.number("zh", i?.minutes, {});return /** @type {LocalizedString} */ (`阅读约 ${minutes__number} 分钟`)
};

const ja_content_reading_time = /** @type {(inputs: Content_Reading_TimeInputs) => LocalizedString} */ (i) => {
	const minutes__plural = registry.plural("ja", i?.minutes, {});
	const minutes__number = registry.number("ja", i?.minutes, {});return /** @type {LocalizedString} */ (`約 ${minutes__number} 分で読めます`)
};

/**
* | minutes__plural | output |
* | --- | --- |
* | "one" | "{minutes__number} min read" |
* | * | "{minutes__number} min read" |
*
* @param {Content_Reading_TimeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_reading_time = /** @type {((inputs: Content_Reading_TimeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Reading_TimeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_reading_time(inputs)
	if (locale === "de") return de_content_reading_time(inputs)
	if (locale === "fr") return fr_content_reading_time(inputs)
	if (locale === "it") return it_content_reading_time(inputs)
	if (locale === "nl") return nl_content_reading_time(inputs)
	if (locale === "pl") return pl_content_reading_time(inputs)
	if (locale === "pt") return pt_content_reading_time(inputs)
	if (locale === "ru") return ru_content_reading_time(inputs)
	if (locale === "sv") return sv_content_reading_time(inputs)
	if (locale === "tr") return tr_content_reading_time(inputs)
	if (locale === "zh") return zh_content_reading_time(inputs)
	if (locale === "ja") return ja_content_reading_time(inputs)
	return en_content_reading_time(inputs)
});
