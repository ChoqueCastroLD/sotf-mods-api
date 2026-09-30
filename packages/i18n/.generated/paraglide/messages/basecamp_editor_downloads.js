/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, display: NonNullable<unknown> }} Basecamp_Editor_DownloadsInputs */

const en_basecamp_editor_downloads = /** @type {(inputs: Basecamp_Editor_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads`)
	
};

const es_basecamp_editor_downloads = /** @type {(inputs: Basecamp_Editor_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} descarga`);
	return /** @type {LocalizedString} */ (`${i?.display} descargas`)
	
};

const de_basecamp_editor_downloads = /** @type {(inputs: Basecamp_Editor_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} Download`);
	return /** @type {LocalizedString} */ (`${i?.display} Downloads`)
	
};

const fr_basecamp_editor_downloads = /** @type {(inputs: Basecamp_Editor_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} téléchargement`);
	return /** @type {LocalizedString} */ (`${i?.display} téléchargements`)
	
};

const it_basecamp_editor_downloads = /** @type {(inputs: Basecamp_Editor_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download`);
	return /** @type {LocalizedString} */ (`${i?.display} download`)
	
};

const nl_basecamp_editor_downloads = /** @type {(inputs: Basecamp_Editor_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads`)
	
};

const pl_basecamp_editor_downloads = /** @type {(inputs: Basecamp_Editor_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} pobranie`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} pobrania`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} pobrań`);
	return /** @type {LocalizedString} */ (`${i?.display} pobrania`)
	
};

const pt_basecamp_editor_downloads = /** @type {(inputs: Basecamp_Editor_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads`)
	
};

const ru_basecamp_editor_downloads = /** @type {(inputs: Basecamp_Editor_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} загрузка`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} загрузки`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} загрузок`);
	return /** @type {LocalizedString} */ (`${i?.display} загрузки`)
	
};

const sv_basecamp_editor_downloads = /** @type {(inputs: Basecamp_Editor_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} nedladdning`);
	return /** @type {LocalizedString} */ (`${i?.display} nedladdningar`)
	
};

const tr_basecamp_editor_downloads = /** @type {(inputs: Basecamp_Editor_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} indirme`);
	return /** @type {LocalizedString} */ (`${i?.display} indirme`)
	
};

const zh_basecamp_editor_downloads = /** @type {(inputs: Basecamp_Editor_DownloadsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.display} 次下载`)
};

const ja_basecamp_editor_downloads = /** @type {(inputs: Basecamp_Editor_DownloadsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.display} ダウンロード`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{display} download" |
* | * | "{display} downloads" |
*
* @param {Basecamp_Editor_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_downloads = /** @type {((inputs: Basecamp_Editor_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_downloads(inputs)
	if (locale === "de") return de_basecamp_editor_downloads(inputs)
	if (locale === "fr") return fr_basecamp_editor_downloads(inputs)
	if (locale === "it") return it_basecamp_editor_downloads(inputs)
	if (locale === "nl") return nl_basecamp_editor_downloads(inputs)
	if (locale === "pl") return pl_basecamp_editor_downloads(inputs)
	if (locale === "pt") return pt_basecamp_editor_downloads(inputs)
	if (locale === "ru") return ru_basecamp_editor_downloads(inputs)
	if (locale === "sv") return sv_basecamp_editor_downloads(inputs)
	if (locale === "tr") return tr_basecamp_editor_downloads(inputs)
	if (locale === "zh") return zh_basecamp_editor_downloads(inputs)
	if (locale === "ja") return ja_basecamp_editor_downloads(inputs)
	return en_basecamp_editor_downloads(inputs)
});
