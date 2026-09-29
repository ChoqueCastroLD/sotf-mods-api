/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ minutes: NonNullable<unknown> }} Emails_Auth_Reset_ExpiryInputs */

const en_emails_auth_reset_expiry = /** @type {(inputs: Emails_Auth_Reset_ExpiryInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("en", i?.minutes, {});
	const minutes__number = registry.number("en", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`This link works once and expires in ${minutes__number} minute.`);
	return /** @type {LocalizedString} */ (`This link works once and expires in ${minutes__number} minutes.`)
	
};

const es_emails_auth_reset_expiry = /** @type {(inputs: Emails_Auth_Reset_ExpiryInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("es", i?.minutes, {});
	const minutes__number = registry.number("es", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`Este enlace sirve una sola vez y caduca en ${minutes__number} minuto.`);
	return /** @type {LocalizedString} */ (`Este enlace sirve una sola vez y caduca en ${minutes__number} minutos.`)
	
};

const de_emails_auth_reset_expiry = /** @type {(inputs: Emails_Auth_Reset_ExpiryInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("de", i?.minutes, {});
	const minutes__number = registry.number("de", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`Dieser Link funktioniert nur einmal und läuft in ${minutes__number} Minute ab.`);
	return /** @type {LocalizedString} */ (`Dieser Link funktioniert nur einmal und läuft in ${minutes__number} Minuten ab.`)
	
};

const fr_emails_auth_reset_expiry = /** @type {(inputs: Emails_Auth_Reset_ExpiryInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("fr", i?.minutes, {});
	const minutes__number = registry.number("fr", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`Ce lien ne fonctionne qu’une fois et expire dans ${minutes__number} minute.`);
	return /** @type {LocalizedString} */ (`Ce lien ne fonctionne qu’une fois et expire dans ${minutes__number} minutes.`)
	
};

const it_emails_auth_reset_expiry = /** @type {(inputs: Emails_Auth_Reset_ExpiryInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("it", i?.minutes, {});
	const minutes__number = registry.number("it", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`Questo link funziona una sola volta e scade tra ${minutes__number} minuto.`);
	return /** @type {LocalizedString} */ (`Questo link funziona una sola volta e scade tra ${minutes__number} minuti.`)
	
};

const nl_emails_auth_reset_expiry = /** @type {(inputs: Emails_Auth_Reset_ExpiryInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("nl", i?.minutes, {});
	const minutes__number = registry.number("nl", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`Deze link werkt één keer en verloopt over ${minutes__number} minuut.`);
	return /** @type {LocalizedString} */ (`Deze link werkt één keer en verloopt over ${minutes__number} minuten.`)
	
};

const pl_emails_auth_reset_expiry = /** @type {(inputs: Emails_Auth_Reset_ExpiryInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("pl", i?.minutes, {});
	const minutes__number = registry.number("pl", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`Ten link działa tylko raz i wygasa za ${minutes__number} minutę.`);
	if (minutes__plural === "few") return /** @type {LocalizedString} */ (`Ten link działa tylko raz i wygasa za ${minutes__number} minuty.`);
	if (minutes__plural === "many") return /** @type {LocalizedString} */ (`Ten link działa tylko raz i wygasa za ${minutes__number} minut.`);
	return /** @type {LocalizedString} */ (`Ten link działa tylko raz i wygasa za ${minutes__number} minuty.`)
	
};

const pt_emails_auth_reset_expiry = /** @type {(inputs: Emails_Auth_Reset_ExpiryInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("pt", i?.minutes, {});
	const minutes__number = registry.number("pt", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`Este link funciona uma única vez e expira em ${minutes__number} minuto.`);
	return /** @type {LocalizedString} */ (`Este link funciona uma única vez e expira em ${minutes__number} minutos.`)
	
};

const ru_emails_auth_reset_expiry = /** @type {(inputs: Emails_Auth_Reset_ExpiryInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("ru", i?.minutes, {});
	const minutes__number = registry.number("ru", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`Ссылка работает один раз и истекает через ${minutes__number} минуту.`);
	if (minutes__plural === "few") return /** @type {LocalizedString} */ (`Ссылка работает один раз и истекает через ${minutes__number} минуты.`);
	if (minutes__plural === "many") return /** @type {LocalizedString} */ (`Ссылка работает один раз и истекает через ${minutes__number} минут.`);
	return /** @type {LocalizedString} */ (`Ссылка работает один раз и истекает через ${minutes__number} минуты.`)
	
};

const sv_emails_auth_reset_expiry = /** @type {(inputs: Emails_Auth_Reset_ExpiryInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("sv", i?.minutes, {});
	const minutes__number = registry.number("sv", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`Länken fungerar en gång och går ut om ${minutes__number} minut.`);
	return /** @type {LocalizedString} */ (`Länken fungerar en gång och går ut om ${minutes__number} minuter.`)
	
};

const tr_emails_auth_reset_expiry = /** @type {(inputs: Emails_Auth_Reset_ExpiryInputs) => LocalizedString} */ (i) => {const minutes__plural = registry.plural("tr", i?.minutes, {});
	const minutes__number = registry.number("tr", i?.minutes, {});
	if (minutes__plural === "one") return /** @type {LocalizedString} */ (`Bu bağlantı yalnızca bir kez çalışır ve ${minutes__number} dakika içinde sona erer.`);
	return /** @type {LocalizedString} */ (`Bu bağlantı yalnızca bir kez çalışır ve ${minutes__number} dakika içinde sona erer.`)
	
};

const zh_emails_auth_reset_expiry = /** @type {(inputs: Emails_Auth_Reset_ExpiryInputs) => LocalizedString} */ (i) => {
	const minutes__plural = registry.plural("zh", i?.minutes, {});
	const minutes__number = registry.number("zh", i?.minutes, {});return /** @type {LocalizedString} */ (`此链接只能使用一次，将在 ${minutes__number} 分钟后失效。`)
};

const ja_emails_auth_reset_expiry = /** @type {(inputs: Emails_Auth_Reset_ExpiryInputs) => LocalizedString} */ (i) => {
	const minutes__plural = registry.plural("ja", i?.minutes, {});
	const minutes__number = registry.number("ja", i?.minutes, {});return /** @type {LocalizedString} */ (`このリンクは 1 回だけ使用でき、${minutes__number} 分後に無効になります。`)
};

/**
* | minutes__plural | output |
* | --- | --- |
* | "one" | "This link works once and expires in {minutes__number} minute." |
* | * | "This link works once and expires in {minutes__number} minutes." |
*
* @param {Emails_Auth_Reset_ExpiryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_reset_expiry = /** @type {((inputs: Emails_Auth_Reset_ExpiryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Reset_ExpiryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_reset_expiry(inputs)
	if (locale === "de") return de_emails_auth_reset_expiry(inputs)
	if (locale === "fr") return fr_emails_auth_reset_expiry(inputs)
	if (locale === "it") return it_emails_auth_reset_expiry(inputs)
	if (locale === "nl") return nl_emails_auth_reset_expiry(inputs)
	if (locale === "pl") return pl_emails_auth_reset_expiry(inputs)
	if (locale === "pt") return pt_emails_auth_reset_expiry(inputs)
	if (locale === "ru") return ru_emails_auth_reset_expiry(inputs)
	if (locale === "sv") return sv_emails_auth_reset_expiry(inputs)
	if (locale === "tr") return tr_emails_auth_reset_expiry(inputs)
	if (locale === "zh") return zh_emails_auth_reset_expiry(inputs)
	if (locale === "ja") return ja_emails_auth_reset_expiry(inputs)
	return en_emails_auth_reset_expiry(inputs)
});
