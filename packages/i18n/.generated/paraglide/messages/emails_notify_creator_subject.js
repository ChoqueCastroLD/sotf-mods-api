/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Emails_Notify_Creator_SubjectInputs */

const en_emails_notify_creator_subject = /** @type {(inputs: Emails_Notify_Creator_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Your mods last week: +${count__number} download`);
	return /** @type {LocalizedString} */ (`Your mods last week: +${count__number} downloads`)
	
};

const es_emails_notify_creator_subject = /** @type {(inputs: Emails_Notify_Creator_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Tus mods la semana pasada: +${count__number} descarga`);
	return /** @type {LocalizedString} */ (`Tus mods la semana pasada: +${count__number} descargas`)
	
};

const de_emails_notify_creator_subject = /** @type {(inputs: Emails_Notify_Creator_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Deine Mods letzte Woche: +${count__number} Download`);
	return /** @type {LocalizedString} */ (`Deine Mods letzte Woche: +${count__number} Downloads`)
	
};

const fr_emails_notify_creator_subject = /** @type {(inputs: Emails_Notify_Creator_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Vos mods la semaine dernière : +${count__number} téléchargement`);
	return /** @type {LocalizedString} */ (`Vos mods la semaine dernière : +${count__number} téléchargements`)
	
};

const it_emails_notify_creator_subject = /** @type {(inputs: Emails_Notify_Creator_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`I tuoi mod la settimana scorsa: +${count__number} download`);
	return /** @type {LocalizedString} */ (`I tuoi mod la settimana scorsa: +${count__number} download`)
	
};

const nl_emails_notify_creator_subject = /** @type {(inputs: Emails_Notify_Creator_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Je mods vorige week: +${count__number} download`);
	return /** @type {LocalizedString} */ (`Je mods vorige week: +${count__number} downloads`)
	
};

const pl_emails_notify_creator_subject = /** @type {(inputs: Emails_Notify_Creator_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Twoje mody w zeszłym tygodniu: +${count__number} pobranie`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Twoje mody w zeszłym tygodniu: +${count__number} pobrania`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Twoje mody w zeszłym tygodniu: +${count__number} pobrań`);
	return /** @type {LocalizedString} */ (`Twoje mody w zeszłym tygodniu: +${count__number} pobrania`)
	
};

const pt_emails_notify_creator_subject = /** @type {(inputs: Emails_Notify_Creator_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Seus mods na semana passada: +${count__number} download`);
	return /** @type {LocalizedString} */ (`Seus mods na semana passada: +${count__number} downloads`)
	
};

const ru_emails_notify_creator_subject = /** @type {(inputs: Emails_Notify_Creator_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ваши моды за прошлую неделю: +${count__number} скачивание`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Ваши моды за прошлую неделю: +${count__number} скачивания`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Ваши моды за прошлую неделю: +${count__number} скачиваний`);
	return /** @type {LocalizedString} */ (`Ваши моды за прошлую неделю: +${count__number} скачивания`)
	
};

const sv_emails_notify_creator_subject = /** @type {(inputs: Emails_Notify_Creator_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Dina moddar förra veckan: +${count__number} nedladdning`);
	return /** @type {LocalizedString} */ (`Dina moddar förra veckan: +${count__number} nedladdningar`)
	
};

const tr_emails_notify_creator_subject = /** @type {(inputs: Emails_Notify_Creator_SubjectInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Geçen hafta modların: +${count__number} indirme`);
	return /** @type {LocalizedString} */ (`Geçen hafta modların: +${count__number} indirme`)
	
};

const zh_emails_notify_creator_subject = /** @type {(inputs: Emails_Notify_Creator_SubjectInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`你的模组上周：+${count__number} 次下载`)
};

const ja_emails_notify_creator_subject = /** @type {(inputs: Emails_Notify_Creator_SubjectInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`先週のあなたの MOD：+${count__number} ダウンロード`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Your mods last week: +{count__number} download" |
* | * | "Your mods last week: +{count__number} downloads" |
*
* @param {Emails_Notify_Creator_SubjectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_creator_subject = /** @type {((inputs: Emails_Notify_Creator_SubjectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_SubjectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_creator_subject(inputs)
	if (locale === "de") return de_emails_notify_creator_subject(inputs)
	if (locale === "fr") return fr_emails_notify_creator_subject(inputs)
	if (locale === "it") return it_emails_notify_creator_subject(inputs)
	if (locale === "nl") return nl_emails_notify_creator_subject(inputs)
	if (locale === "pl") return pl_emails_notify_creator_subject(inputs)
	if (locale === "pt") return pt_emails_notify_creator_subject(inputs)
	if (locale === "ru") return ru_emails_notify_creator_subject(inputs)
	if (locale === "sv") return sv_emails_notify_creator_subject(inputs)
	if (locale === "tr") return tr_emails_notify_creator_subject(inputs)
	if (locale === "zh") return zh_emails_notify_creator_subject(inputs)
	if (locale === "ja") return ja_emails_notify_creator_subject(inputs)
	return en_emails_notify_creator_subject(inputs)
});
