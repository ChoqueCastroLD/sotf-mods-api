/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, display: NonNullable<unknown> }} Ui_Domain_Downloads_CountInputs */

const en_ui_domain_downloads_count = /** @type {(inputs: Ui_Domain_Downloads_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads`)
	
};

const es_ui_domain_downloads_count = /** @type {(inputs: Ui_Domain_Downloads_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} descarga`);
	return /** @type {LocalizedString} */ (`${i?.display} descargas`)
	
};

const de_ui_domain_downloads_count = /** @type {(inputs: Ui_Domain_Downloads_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} Download`);
	return /** @type {LocalizedString} */ (`${i?.display} Downloads`)
	
};

const fr_ui_domain_downloads_count = /** @type {(inputs: Ui_Domain_Downloads_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} téléchargement`);
	return /** @type {LocalizedString} */ (`${i?.display} téléchargements`)
	
};

const it_ui_domain_downloads_count = /** @type {(inputs: Ui_Domain_Downloads_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download`);
	return /** @type {LocalizedString} */ (`${i?.display} download`)
	
};

const nl_ui_domain_downloads_count = /** @type {(inputs: Ui_Domain_Downloads_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads`)
	
};

const pl_ui_domain_downloads_count = /** @type {(inputs: Ui_Domain_Downloads_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} pobranie`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} pobrania`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} pobrań`);
	return /** @type {LocalizedString} */ (`${i?.display} pobrania`)
	
};

const pt_ui_domain_downloads_count = /** @type {(inputs: Ui_Domain_Downloads_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads`)
	
};

const ru_ui_domain_downloads_count = /** @type {(inputs: Ui_Domain_Downloads_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} скачивание`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} скачивания`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} скачиваний`);
	return /** @type {LocalizedString} */ (`${i?.display} скачивания`)
	
};

const sv_ui_domain_downloads_count = /** @type {(inputs: Ui_Domain_Downloads_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} nedladdning`);
	return /** @type {LocalizedString} */ (`${i?.display} nedladdningar`)
	
};

const tr_ui_domain_downloads_count = /** @type {(inputs: Ui_Domain_Downloads_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} indirme`);
	return /** @type {LocalizedString} */ (`${i?.display} indirme`)
	
};

const zh_ui_domain_downloads_count = /** @type {(inputs: Ui_Domain_Downloads_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.display} 次下载`)
};

const ja_ui_domain_downloads_count = /** @type {(inputs: Ui_Domain_Downloads_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.display} 回ダウンロード`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{display} download" |
* | * | "{display} downloads" |
*
* @param {Ui_Domain_Downloads_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_downloads_count = /** @type {((inputs: Ui_Domain_Downloads_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Downloads_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_downloads_count(inputs)
	if (locale === "de") return de_ui_domain_downloads_count(inputs)
	if (locale === "fr") return fr_ui_domain_downloads_count(inputs)
	if (locale === "it") return it_ui_domain_downloads_count(inputs)
	if (locale === "nl") return nl_ui_domain_downloads_count(inputs)
	if (locale === "pl") return pl_ui_domain_downloads_count(inputs)
	if (locale === "pt") return pt_ui_domain_downloads_count(inputs)
	if (locale === "ru") return ru_ui_domain_downloads_count(inputs)
	if (locale === "sv") return sv_ui_domain_downloads_count(inputs)
	if (locale === "tr") return tr_ui_domain_downloads_count(inputs)
	if (locale === "zh") return zh_ui_domain_downloads_count(inputs)
	if (locale === "ja") return ja_ui_domain_downloads_count(inputs)
	return en_ui_domain_downloads_count(inputs)
});
