/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, display: NonNullable<unknown>, name: NonNullable<unknown> }} Basecamp_Live_DownloadsInputs */

const en_basecamp_live_downloads = /** @type {(inputs: Basecamp_Live_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download · ${i?.name}`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads · ${i?.name}`)
	
};

const es_basecamp_live_downloads = /** @type {(inputs: Basecamp_Live_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} descarga · ${i?.name}`);
	return /** @type {LocalizedString} */ (`${i?.display} descargas · ${i?.name}`)
	
};

const de_basecamp_live_downloads = /** @type {(inputs: Basecamp_Live_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} Download · ${i?.name}`);
	return /** @type {LocalizedString} */ (`${i?.display} Downloads · ${i?.name}`)
	
};

const fr_basecamp_live_downloads = /** @type {(inputs: Basecamp_Live_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} téléchargement · ${i?.name}`);
	return /** @type {LocalizedString} */ (`${i?.display} téléchargements · ${i?.name}`)
	
};

const it_basecamp_live_downloads = /** @type {(inputs: Basecamp_Live_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download · ${i?.name}`);
	return /** @type {LocalizedString} */ (`${i?.display} download · ${i?.name}`)
	
};

const nl_basecamp_live_downloads = /** @type {(inputs: Basecamp_Live_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download · ${i?.name}`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads · ${i?.name}`)
	
};

const pl_basecamp_live_downloads = /** @type {(inputs: Basecamp_Live_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} pobranie · ${i?.name}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} pobrania · ${i?.name}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} pobrań · ${i?.name}`);
	return /** @type {LocalizedString} */ (`${i?.display} pobrania · ${i?.name}`)
	
};

const pt_basecamp_live_downloads = /** @type {(inputs: Basecamp_Live_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download · ${i?.name}`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads · ${i?.name}`)
	
};

const ru_basecamp_live_downloads = /** @type {(inputs: Basecamp_Live_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} загрузка · ${i?.name}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} загрузки · ${i?.name}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} загрузок · ${i?.name}`);
	return /** @type {LocalizedString} */ (`${i?.display} загрузки · ${i?.name}`)
	
};

const sv_basecamp_live_downloads = /** @type {(inputs: Basecamp_Live_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} nedladdning · ${i?.name}`);
	return /** @type {LocalizedString} */ (`${i?.display} nedladdningar · ${i?.name}`)
	
};

const tr_basecamp_live_downloads = /** @type {(inputs: Basecamp_Live_DownloadsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} indirme · ${i?.name}`);
	return /** @type {LocalizedString} */ (`${i?.display} indirme · ${i?.name}`)
	
};

const zh_basecamp_live_downloads = /** @type {(inputs: Basecamp_Live_DownloadsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.display} 次下载 · ${i?.name}`)
};

const ja_basecamp_live_downloads = /** @type {(inputs: Basecamp_Live_DownloadsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.display} 件のダウンロード · ${i?.name}`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{display} download · {name}" |
* | * | "{display} downloads · {name}" |
*
* @param {Basecamp_Live_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_live_downloads = /** @type {((inputs: Basecamp_Live_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Live_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_live_downloads(inputs)
	if (locale === "de") return de_basecamp_live_downloads(inputs)
	if (locale === "fr") return fr_basecamp_live_downloads(inputs)
	if (locale === "it") return it_basecamp_live_downloads(inputs)
	if (locale === "nl") return nl_basecamp_live_downloads(inputs)
	if (locale === "pl") return pl_basecamp_live_downloads(inputs)
	if (locale === "pt") return pt_basecamp_live_downloads(inputs)
	if (locale === "ru") return ru_basecamp_live_downloads(inputs)
	if (locale === "sv") return sv_basecamp_live_downloads(inputs)
	if (locale === "tr") return tr_basecamp_live_downloads(inputs)
	if (locale === "zh") return zh_basecamp_live_downloads(inputs)
	if (locale === "ja") return ja_basecamp_live_downloads(inputs)
	return en_basecamp_live_downloads(inputs)
});
