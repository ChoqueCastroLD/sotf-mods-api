/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Catalog_DownloadsInputs */

const en_explore_catalog_downloads = /** @type {(inputs: Explore_Catalog_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} download`);
	return /** @type {LocalizedString} */ (`${count__number} downloads`)
	
};

const es_explore_catalog_downloads = /** @type {(inputs: Explore_Catalog_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} descarga`);
	return /** @type {LocalizedString} */ (`${count__number} descargas`)
	
};

const de_explore_catalog_downloads = /** @type {(inputs: Explore_Catalog_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Download`);
	return /** @type {LocalizedString} */ (`${count__number} Downloads`)
	
};

const fr_explore_catalog_downloads = /** @type {(inputs: Explore_Catalog_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} téléchargement`);
	return /** @type {LocalizedString} */ (`${count__number} téléchargements`)
	
};

const it_explore_catalog_downloads = /** @type {(inputs: Explore_Catalog_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} download`);
	return /** @type {LocalizedString} */ (`${count__number} download`)
	
};

const nl_explore_catalog_downloads = /** @type {(inputs: Explore_Catalog_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} download`);
	return /** @type {LocalizedString} */ (`${count__number} downloads`)
	
};

const pl_explore_catalog_downloads = /** @type {(inputs: Explore_Catalog_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} pobranie`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} pobrania`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} pobrań`);
	return /** @type {LocalizedString} */ (`${count__number} pobrania`)
	
};

const pt_explore_catalog_downloads = /** @type {(inputs: Explore_Catalog_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} download`);
	return /** @type {LocalizedString} */ (`${count__number} downloads`)
	
};

const ru_explore_catalog_downloads = /** @type {(inputs: Explore_Catalog_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} скачивание`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} скачивания`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} скачиваний`);
	return /** @type {LocalizedString} */ (`${count__number} скачивания`)
	
};

const sv_explore_catalog_downloads = /** @type {(inputs: Explore_Catalog_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nedladdning`);
	return /** @type {LocalizedString} */ (`${count__number} nedladdningar`)
	
};

const tr_explore_catalog_downloads = /** @type {(inputs: Explore_Catalog_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} indirme`);
	return /** @type {LocalizedString} */ (`${count__number} indirme`)
	
};

const zh_explore_catalog_downloads = /** @type {(inputs: Explore_Catalog_DownloadsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 次下载`)
};

const ja_explore_catalog_downloads = /** @type {(inputs: Explore_Catalog_DownloadsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number}回のダウンロード`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} download" |
* | * | "{count__number} downloads" |
*
* @param {Explore_Catalog_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_downloads = /** @type {((inputs: Explore_Catalog_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_downloads(inputs)
	if (locale === "de") return de_explore_catalog_downloads(inputs)
	if (locale === "fr") return fr_explore_catalog_downloads(inputs)
	if (locale === "it") return it_explore_catalog_downloads(inputs)
	if (locale === "nl") return nl_explore_catalog_downloads(inputs)
	if (locale === "pl") return pl_explore_catalog_downloads(inputs)
	if (locale === "pt") return pt_explore_catalog_downloads(inputs)
	if (locale === "ru") return ru_explore_catalog_downloads(inputs)
	if (locale === "sv") return sv_explore_catalog_downloads(inputs)
	if (locale === "tr") return tr_explore_catalog_downloads(inputs)
	if (locale === "zh") return zh_explore_catalog_downloads(inputs)
	if (locale === "ja") return ja_explore_catalog_downloads(inputs)
	return en_explore_catalog_downloads(inputs)
});
