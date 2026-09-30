/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Ann_TranslationsInputs */

const en_admin_ann_translations = /** @type {(inputs: Admin_Ann_TranslationsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`English only`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`English + ${count__number} translation`);
	return /** @type {LocalizedString} */ (`English + ${count__number} translations`)
	
};

const es_admin_ann_translations = /** @type {(inputs: Admin_Ann_TranslationsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Solo inglés`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Inglés + ${count__number} traducción`);
	return /** @type {LocalizedString} */ (`Inglés + ${count__number} traducciones`)
	
};

const de_admin_ann_translations = /** @type {(inputs: Admin_Ann_TranslationsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Nur Englisch`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Englisch + ${count__number} Übersetzung`);
	return /** @type {LocalizedString} */ (`Englisch + ${count__number} Übersetzungen`)
	
};

const fr_admin_ann_translations = /** @type {(inputs: Admin_Ann_TranslationsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Anglais seulement`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Anglais + ${count__number} traduction`);
	return /** @type {LocalizedString} */ (`Anglais + ${count__number} traductions`)
	
};

const it_admin_ann_translations = /** @type {(inputs: Admin_Ann_TranslationsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Solo inglese`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Inglese + ${count__number} traduzione`);
	return /** @type {LocalizedString} */ (`Inglese + ${count__number} traduzioni`)
	
};

const nl_admin_ann_translations = /** @type {(inputs: Admin_Ann_TranslationsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Alleen Engels`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Engels + ${count__number} vertaling`);
	return /** @type {LocalizedString} */ (`Engels + ${count__number} vertalingen`)
	
};

const pl_admin_ann_translations = /** @type {(inputs: Admin_Ann_TranslationsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Tylko angielski`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Angielski + ${count__number} tłumaczenie`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Angielski + ${count__number} tłumaczenia`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Angielski + ${count__number} tłumaczeń`);
	return /** @type {LocalizedString} */ (`Angielski + ${count__number} tłumaczenia`)
	
};

const pt_admin_ann_translations = /** @type {(inputs: Admin_Ann_TranslationsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Só inglês`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Inglês + ${count__number} tradução`);
	return /** @type {LocalizedString} */ (`Inglês + ${count__number} traduções`)
	
};

const ru_admin_ann_translations = /** @type {(inputs: Admin_Ann_TranslationsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Только английский`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Английский + ${count__number} перевод`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Английский + ${count__number} перевода`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Английский + ${count__number} переводов`);
	return /** @type {LocalizedString} */ (`Английский + ${count__number} перевода`)
	
};

const sv_admin_ann_translations = /** @type {(inputs: Admin_Ann_TranslationsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Bara engelska`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Engelska + ${count__number} översättning`);
	return /** @type {LocalizedString} */ (`Engelska + ${count__number} översättningar`)
	
};

const tr_admin_ann_translations = /** @type {(inputs: Admin_Ann_TranslationsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Yalnızca İngilizce`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`İngilizce + ${count__number} çeviri`);
	return /** @type {LocalizedString} */ (`İngilizce + ${count__number} çeviri`)
	
};

const zh_admin_ann_translations = /** @type {(inputs: Admin_Ann_TranslationsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`仅英文`);
	return /** @type {LocalizedString} */ (`英文 + ${count__number} 种翻译`)
	
};

const ja_admin_ann_translations = /** @type {(inputs: Admin_Ann_TranslationsInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`英語のみ`);
	return /** @type {LocalizedString} */ (`英語 + 翻訳 ${count__number} 件`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "English only" |
* | * | "one" | "English + {count__number} translation" |
* | * | * | "English + {count__number} translations" |
*
* @param {Admin_Ann_TranslationsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_translations = /** @type {((inputs: Admin_Ann_TranslationsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_TranslationsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_translations(inputs)
	if (locale === "de") return de_admin_ann_translations(inputs)
	if (locale === "fr") return fr_admin_ann_translations(inputs)
	if (locale === "it") return it_admin_ann_translations(inputs)
	if (locale === "nl") return nl_admin_ann_translations(inputs)
	if (locale === "pl") return pl_admin_ann_translations(inputs)
	if (locale === "pt") return pt_admin_ann_translations(inputs)
	if (locale === "ru") return ru_admin_ann_translations(inputs)
	if (locale === "sv") return sv_admin_ann_translations(inputs)
	if (locale === "tr") return tr_admin_ann_translations(inputs)
	if (locale === "zh") return zh_admin_ann_translations(inputs)
	if (locale === "ja") return ja_admin_ann_translations(inputs)
	return en_admin_ann_translations(inputs)
});
