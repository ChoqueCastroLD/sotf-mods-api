/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ hours: NonNullable<unknown> }} Emails_Auth_Link_Expiry_HoursInputs */

const en_emails_auth_link_expiry_hours = /** @type {(inputs: Emails_Auth_Link_Expiry_HoursInputs) => LocalizedString} */ (i) => {const hours__plural = registry.plural("en", i?.hours, {});
	const hours__number = registry.number("en", i?.hours, {});
	if (hours__plural === "one") return /** @type {LocalizedString} */ (`This link works once and expires in ${hours__number} hour.`);
	return /** @type {LocalizedString} */ (`This link works once and expires in ${hours__number} hours.`)
	
};

const es_emails_auth_link_expiry_hours = /** @type {(inputs: Emails_Auth_Link_Expiry_HoursInputs) => LocalizedString} */ (i) => {const hours__plural = registry.plural("es", i?.hours, {});
	const hours__number = registry.number("es", i?.hours, {});
	if (hours__plural === "one") return /** @type {LocalizedString} */ (`Este enlace sirve una sola vez y caduca en ${hours__number} hora.`);
	return /** @type {LocalizedString} */ (`Este enlace sirve una sola vez y caduca en ${hours__number} horas.`)
	
};

const de_emails_auth_link_expiry_hours = /** @type {(inputs: Emails_Auth_Link_Expiry_HoursInputs) => LocalizedString} */ (i) => {const hours__plural = registry.plural("de", i?.hours, {});
	const hours__number = registry.number("de", i?.hours, {});
	if (hours__plural === "one") return /** @type {LocalizedString} */ (`Dieser Link funktioniert nur einmal und läuft in ${hours__number} Stunde ab.`);
	return /** @type {LocalizedString} */ (`Dieser Link funktioniert nur einmal und läuft in ${hours__number} Stunden ab.`)
	
};

const fr_emails_auth_link_expiry_hours = /** @type {(inputs: Emails_Auth_Link_Expiry_HoursInputs) => LocalizedString} */ (i) => {const hours__plural = registry.plural("fr", i?.hours, {});
	const hours__number = registry.number("fr", i?.hours, {});
	if (hours__plural === "one") return /** @type {LocalizedString} */ (`Ce lien ne fonctionne qu’une fois et expire dans ${hours__number} heure.`);
	return /** @type {LocalizedString} */ (`Ce lien ne fonctionne qu’une fois et expire dans ${hours__number} heures.`)
	
};

const it_emails_auth_link_expiry_hours = /** @type {(inputs: Emails_Auth_Link_Expiry_HoursInputs) => LocalizedString} */ (i) => {const hours__plural = registry.plural("it", i?.hours, {});
	const hours__number = registry.number("it", i?.hours, {});
	if (hours__plural === "one") return /** @type {LocalizedString} */ (`Questo link funziona una sola volta e scade tra ${hours__number} ora.`);
	return /** @type {LocalizedString} */ (`Questo link funziona una sola volta e scade tra ${hours__number} ore.`)
	
};

const nl_emails_auth_link_expiry_hours = /** @type {(inputs: Emails_Auth_Link_Expiry_HoursInputs) => LocalizedString} */ (i) => {const hours__plural = registry.plural("nl", i?.hours, {});
	const hours__number = registry.number("nl", i?.hours, {});
	if (hours__plural === "one") return /** @type {LocalizedString} */ (`Deze link werkt één keer en verloopt over ${hours__number} uur.`);
	return /** @type {LocalizedString} */ (`Deze link werkt één keer en verloopt over ${hours__number} uur.`)
	
};

const pl_emails_auth_link_expiry_hours = /** @type {(inputs: Emails_Auth_Link_Expiry_HoursInputs) => LocalizedString} */ (i) => {const hours__plural = registry.plural("pl", i?.hours, {});
	const hours__number = registry.number("pl", i?.hours, {});
	if (hours__plural === "one") return /** @type {LocalizedString} */ (`Ten link działa tylko raz i wygasa za ${hours__number} godzinę.`);
	if (hours__plural === "few") return /** @type {LocalizedString} */ (`Ten link działa tylko raz i wygasa za ${hours__number} godziny.`);
	if (hours__plural === "many") return /** @type {LocalizedString} */ (`Ten link działa tylko raz i wygasa za ${hours__number} godzin.`);
	return /** @type {LocalizedString} */ (`Ten link działa tylko raz i wygasa za ${hours__number} godziny.`)
	
};

const pt_emails_auth_link_expiry_hours = /** @type {(inputs: Emails_Auth_Link_Expiry_HoursInputs) => LocalizedString} */ (i) => {const hours__plural = registry.plural("pt", i?.hours, {});
	const hours__number = registry.number("pt", i?.hours, {});
	if (hours__plural === "one") return /** @type {LocalizedString} */ (`Este link funciona uma única vez e expira em ${hours__number} hora.`);
	return /** @type {LocalizedString} */ (`Este link funciona uma única vez e expira em ${hours__number} horas.`)
	
};

const ru_emails_auth_link_expiry_hours = /** @type {(inputs: Emails_Auth_Link_Expiry_HoursInputs) => LocalizedString} */ (i) => {const hours__plural = registry.plural("ru", i?.hours, {});
	const hours__number = registry.number("ru", i?.hours, {});
	if (hours__plural === "one") return /** @type {LocalizedString} */ (`Ссылка работает один раз и истекает через ${hours__number} час.`);
	if (hours__plural === "few") return /** @type {LocalizedString} */ (`Ссылка работает один раз и истекает через ${hours__number} часа.`);
	if (hours__plural === "many") return /** @type {LocalizedString} */ (`Ссылка работает один раз и истекает через ${hours__number} часов.`);
	return /** @type {LocalizedString} */ (`Ссылка работает один раз и истекает через ${hours__number} часа.`)
	
};

const sv_emails_auth_link_expiry_hours = /** @type {(inputs: Emails_Auth_Link_Expiry_HoursInputs) => LocalizedString} */ (i) => {const hours__plural = registry.plural("sv", i?.hours, {});
	const hours__number = registry.number("sv", i?.hours, {});
	if (hours__plural === "one") return /** @type {LocalizedString} */ (`Länken fungerar en gång och går ut om ${hours__number} timme.`);
	return /** @type {LocalizedString} */ (`Länken fungerar en gång och går ut om ${hours__number} timmar.`)
	
};

const tr_emails_auth_link_expiry_hours = /** @type {(inputs: Emails_Auth_Link_Expiry_HoursInputs) => LocalizedString} */ (i) => {const hours__plural = registry.plural("tr", i?.hours, {});
	const hours__number = registry.number("tr", i?.hours, {});
	if (hours__plural === "one") return /** @type {LocalizedString} */ (`Bu bağlantı yalnızca bir kez çalışır ve ${hours__number} saat içinde sona erer.`);
	return /** @type {LocalizedString} */ (`Bu bağlantı yalnızca bir kez çalışır ve ${hours__number} saat içinde sona erer.`)
	
};

const zh_emails_auth_link_expiry_hours = /** @type {(inputs: Emails_Auth_Link_Expiry_HoursInputs) => LocalizedString} */ (i) => {
	const hours__plural = registry.plural("zh", i?.hours, {});
	const hours__number = registry.number("zh", i?.hours, {});return /** @type {LocalizedString} */ (`此链接只能使用一次，将在 ${hours__number} 小时后失效。`)
};

const ja_emails_auth_link_expiry_hours = /** @type {(inputs: Emails_Auth_Link_Expiry_HoursInputs) => LocalizedString} */ (i) => {
	const hours__plural = registry.plural("ja", i?.hours, {});
	const hours__number = registry.number("ja", i?.hours, {});return /** @type {LocalizedString} */ (`このリンクは 1 回だけ使用でき、${hours__number} 時間後に無効になります。`)
};

/**
* | hours__plural | output |
* | --- | --- |
* | "one" | "This link works once and expires in {hours__number} hour." |
* | * | "This link works once and expires in {hours__number} hours." |
*
* @param {Emails_Auth_Link_Expiry_HoursInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_link_expiry_hours = /** @type {((inputs: Emails_Auth_Link_Expiry_HoursInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Link_Expiry_HoursInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_link_expiry_hours(inputs)
	if (locale === "de") return de_emails_auth_link_expiry_hours(inputs)
	if (locale === "fr") return fr_emails_auth_link_expiry_hours(inputs)
	if (locale === "it") return it_emails_auth_link_expiry_hours(inputs)
	if (locale === "nl") return nl_emails_auth_link_expiry_hours(inputs)
	if (locale === "pl") return pl_emails_auth_link_expiry_hours(inputs)
	if (locale === "pt") return pt_emails_auth_link_expiry_hours(inputs)
	if (locale === "ru") return ru_emails_auth_link_expiry_hours(inputs)
	if (locale === "sv") return sv_emails_auth_link_expiry_hours(inputs)
	if (locale === "tr") return tr_emails_auth_link_expiry_hours(inputs)
	if (locale === "zh") return zh_emails_auth_link_expiry_hours(inputs)
	if (locale === "ja") return ja_emails_auth_link_expiry_hours(inputs)
	return en_emails_auth_link_expiry_hours(inputs)
});
