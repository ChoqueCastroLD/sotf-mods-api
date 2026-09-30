/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Emails_Notify_MoreInputs */

const en_emails_notify_more = /** @type {(inputs: Emails_Notify_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`And ${count__number} more signal`);
	return /** @type {LocalizedString} */ (`And ${count__number} more signals`)
	
};

const es_emails_notify_more = /** @type {(inputs: Emails_Notify_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Y ${count__number} señal más`);
	return /** @type {LocalizedString} */ (`Y ${count__number} señales más`)
	
};

const de_emails_notify_more = /** @type {(inputs: Emails_Notify_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Und ${count__number} weiteres Signal`);
	return /** @type {LocalizedString} */ (`Und ${count__number} weitere Signale`)
	
};

const fr_emails_notify_more = /** @type {(inputs: Emails_Notify_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Et ${count__number} autre signal`);
	return /** @type {LocalizedString} */ (`Et ${count__number} autres signaux`)
	
};

const it_emails_notify_more = /** @type {(inputs: Emails_Notify_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`E ${count__number} altro segnale`);
	return /** @type {LocalizedString} */ (`E altri ${count__number} segnali`)
	
};

const nl_emails_notify_more = /** @type {(inputs: Emails_Notify_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`En nog ${count__number} signaal`);
	return /** @type {LocalizedString} */ (`En nog ${count__number} signalen`)
	
};

const pl_emails_notify_more = /** @type {(inputs: Emails_Notify_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`I jeszcze ${count__number} sygnał`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`I jeszcze ${count__number} sygnały`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`I jeszcze ${count__number} sygnałów`);
	return /** @type {LocalizedString} */ (`I jeszcze ${count__number} sygnału`)
	
};

const pt_emails_notify_more = /** @type {(inputs: Emails_Notify_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`E mais ${count__number} sinal`);
	return /** @type {LocalizedString} */ (`E mais ${count__number} sinais`)
	
};

const ru_emails_notify_more = /** @type {(inputs: Emails_Notify_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`И ещё ${count__number} сигнал`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`И ещё ${count__number} сигнала`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`И ещё ${count__number} сигналов`);
	return /** @type {LocalizedString} */ (`И ещё ${count__number} сигнала`)
	
};

const sv_emails_notify_more = /** @type {(inputs: Emails_Notify_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Och ${count__number} signal till`);
	return /** @type {LocalizedString} */ (`Och ${count__number} signaler till`)
	
};

const tr_emails_notify_more = /** @type {(inputs: Emails_Notify_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ve ${count__number} sinyal daha`);
	return /** @type {LocalizedString} */ (`Ve ${count__number} sinyal daha`)
	
};

const zh_emails_notify_more = /** @type {(inputs: Emails_Notify_MoreInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`还有 ${count__number} 条信号`)
};

const ja_emails_notify_more = /** @type {(inputs: Emails_Notify_MoreInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`ほか ${count__number} 件のシグナル`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "And {count__number} more signal" |
* | * | "And {count__number} more signals" |
*
* @param {Emails_Notify_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_more = /** @type {((inputs: Emails_Notify_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_more(inputs)
	if (locale === "de") return de_emails_notify_more(inputs)
	if (locale === "fr") return fr_emails_notify_more(inputs)
	if (locale === "it") return it_emails_notify_more(inputs)
	if (locale === "nl") return nl_emails_notify_more(inputs)
	if (locale === "pl") return pl_emails_notify_more(inputs)
	if (locale === "pt") return pt_emails_notify_more(inputs)
	if (locale === "ru") return ru_emails_notify_more(inputs)
	if (locale === "sv") return sv_emails_notify_more(inputs)
	if (locale === "tr") return tr_emails_notify_more(inputs)
	if (locale === "zh") return zh_emails_notify_more(inputs)
	if (locale === "ja") return ja_emails_notify_more(inputs)
	return en_emails_notify_more(inputs)
});
