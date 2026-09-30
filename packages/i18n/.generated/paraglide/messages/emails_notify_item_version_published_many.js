/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, mod: NonNullable<unknown>, version: NonNullable<unknown> }} Emails_Notify_Item_Version_Published_ManyInputs */

const en_emails_notify_item_version_published_many = /** @type {(inputs: Emails_Notify_Item_Version_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} has ${count__number} new version, the latest is ${i?.version}`);
	return /** @type {LocalizedString} */ (`${i?.mod} has ${count__number} new versions, the latest is ${i?.version}`)
	
};

const es_emails_notify_item_version_published_many = /** @type {(inputs: Emails_Notify_Item_Version_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} tiene ${count__number} versión nueva; la última es ${i?.version}`);
	return /** @type {LocalizedString} */ (`${i?.mod} tiene ${count__number} versiones nuevas; la última es ${i?.version}`)
	
};

const de_emails_notify_item_version_published_many = /** @type {(inputs: Emails_Notify_Item_Version_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} hat ${count__number} neue Version, die neueste ist ${i?.version}`);
	return /** @type {LocalizedString} */ (`${i?.mod} hat ${count__number} neue Versionen, die neueste ist ${i?.version}`)
	
};

const fr_emails_notify_item_version_published_many = /** @type {(inputs: Emails_Notify_Item_Version_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} a ${count__number} nouvelle version, la dernière est ${i?.version}`);
	return /** @type {LocalizedString} */ (`${i?.mod} a ${count__number} nouvelles versions, la dernière est ${i?.version}`)
	
};

const it_emails_notify_item_version_published_many = /** @type {(inputs: Emails_Notify_Item_Version_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} ha ${count__number} nuova versione, l’ultima è ${i?.version}`);
	return /** @type {LocalizedString} */ (`${i?.mod} ha ${count__number} nuove versioni, l’ultima è ${i?.version}`)
	
};

const nl_emails_notify_item_version_published_many = /** @type {(inputs: Emails_Notify_Item_Version_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} heeft ${count__number} nieuwe versie, de nieuwste is ${i?.version}`);
	return /** @type {LocalizedString} */ (`${i?.mod} heeft ${count__number} nieuwe versies, de nieuwste is ${i?.version}`)
	
};

const pl_emails_notify_item_version_published_many = /** @type {(inputs: Emails_Notify_Item_Version_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} ma ${count__number} nową wersję, najnowsza to ${i?.version}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.mod} ma ${count__number} nowe wersje, najnowsza to ${i?.version}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.mod} ma ${count__number} nowych wersji, najnowsza to ${i?.version}`);
	return /** @type {LocalizedString} */ (`${i?.mod} ma ${count__number} nowej wersji, najnowsza to ${i?.version}`)
	
};

const pt_emails_notify_item_version_published_many = /** @type {(inputs: Emails_Notify_Item_Version_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} tem ${count__number} nova versão, a mais recente é ${i?.version}`);
	return /** @type {LocalizedString} */ (`${i?.mod} tem ${count__number} novas versões, a mais recente é ${i?.version}`)
	
};

const ru_emails_notify_item_version_published_many = /** @type {(inputs: Emails_Notify_Item_Version_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`У ${i?.mod} ${count__number} новая версия, последняя — ${i?.version}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`У ${i?.mod} ${count__number} новые версии, последняя — ${i?.version}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`У ${i?.mod} ${count__number} новых версий, последняя — ${i?.version}`);
	return /** @type {LocalizedString} */ (`У ${i?.mod} ${count__number} новой версии, последняя — ${i?.version}`)
	
};

const sv_emails_notify_item_version_published_many = /** @type {(inputs: Emails_Notify_Item_Version_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} har ${count__number} ny version, den senaste är ${i?.version}`);
	return /** @type {LocalizedString} */ (`${i?.mod} har ${count__number} nya versioner, den senaste är ${i?.version}`)
	
};

const tr_emails_notify_item_version_published_many = /** @type {(inputs: Emails_Notify_Item_Version_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} için ${count__number} yeni sürüm var, en yenisi ${i?.version}`);
	return /** @type {LocalizedString} */ (`${i?.mod} için ${count__number} yeni sürüm var, en yenisi ${i?.version}`)
	
};

const zh_emails_notify_item_version_published_many = /** @type {(inputs: Emails_Notify_Item_Version_Published_ManyInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.mod} 有 ${count__number} 个新版本，最新为 ${i?.version}`)
};

const ja_emails_notify_item_version_published_many = /** @type {(inputs: Emails_Notify_Item_Version_Published_ManyInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.mod} に ${count__number} 件の新バージョン（最新は ${i?.version}）`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{mod} has {count__number} new version, the latest is {version}" |
* | * | "{mod} has {count__number} new versions, the latest is {version}" |
*
* @param {Emails_Notify_Item_Version_Published_ManyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_version_published_many = /** @type {((inputs: Emails_Notify_Item_Version_Published_ManyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Version_Published_ManyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_version_published_many(inputs)
	if (locale === "de") return de_emails_notify_item_version_published_many(inputs)
	if (locale === "fr") return fr_emails_notify_item_version_published_many(inputs)
	if (locale === "it") return it_emails_notify_item_version_published_many(inputs)
	if (locale === "nl") return nl_emails_notify_item_version_published_many(inputs)
	if (locale === "pl") return pl_emails_notify_item_version_published_many(inputs)
	if (locale === "pt") return pt_emails_notify_item_version_published_many(inputs)
	if (locale === "ru") return ru_emails_notify_item_version_published_many(inputs)
	if (locale === "sv") return sv_emails_notify_item_version_published_many(inputs)
	if (locale === "tr") return tr_emails_notify_item_version_published_many(inputs)
	if (locale === "zh") return zh_emails_notify_item_version_published_many(inputs)
	if (locale === "ja") return ja_emails_notify_item_version_published_many(inputs)
	return en_emails_notify_item_version_published_many(inputs)
});
