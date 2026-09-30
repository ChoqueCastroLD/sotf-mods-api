/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Console_Empty_TextInputs */

const en_kitsocial_console_empty_text = /** @type {(inputs: Kitsocial_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follow a kit from its page to see it here and get notified when it changes.`)
};

const es_kitsocial_console_empty_text = /** @type {(inputs: Kitsocial_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sigue un kit desde su página para verlo aquí y recibir avisos cuando cambie.`)
};

const de_kitsocial_console_empty_text = /** @type {(inputs: Kitsocial_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folge einem Kit auf seiner Seite, um es hier zu sehen und bei Änderungen benachrichtigt zu werden.`)
};

const fr_kitsocial_console_empty_text = /** @type {(inputs: Kitsocial_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivez un kit depuis sa page pour le retrouver ici et être prévenu de ses changements.`)
};

const it_kitsocial_console_empty_text = /** @type {(inputs: Kitsocial_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segui un kit dalla sua pagina per vederlo qui e ricevere avvisi quando cambia.`)
};

const nl_kitsocial_console_empty_text = /** @type {(inputs: Kitsocial_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volg een kit vanaf zijn pagina om hem hier te zien en meldingen te krijgen bij wijzigingen.`)
};

const pl_kitsocial_console_empty_text = /** @type {(inputs: Kitsocial_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwuj zestaw na jego stronie, aby widzieć go tutaj i dostawać powiadomienia o zmianach.`)
};

const pt_kitsocial_console_empty_text = /** @type {(inputs: Kitsocial_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siga um kit na página dele para vê-lo aqui e ser avisado quando mudar.`)
};

const ru_kitsocial_console_empty_text = /** @type {(inputs: Kitsocial_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подпишитесь на набор на его странице, чтобы видеть его здесь и получать уведомления об изменениях.`)
};

const sv_kitsocial_console_empty_text = /** @type {(inputs: Kitsocial_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följ ett kit på dess sida för att se det här och få besked när det ändras.`)
};

const tr_kitsocial_console_empty_text = /** @type {(inputs: Kitsocial_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir kiti sayfasından takip et; burada görünür ve değiştiğinde haber alırsın.`)
};

const zh_kitsocial_console_empty_text = /** @type {(inputs: Kitsocial_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在套件页面点击关注，即可在这里看到它，并在更新时收到通知。`)
};

const ja_kitsocial_console_empty_text = /** @type {(inputs: Kitsocial_Console_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットのページでフォローすると、ここに表示され、更新時に通知が届きます。`)
};

/**
* | output |
* | --- |
* | "Follow a kit from its page to see it here and get notified when it changes." |
*
* @param {Kitsocial_Console_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_console_empty_text = /** @type {((inputs?: Kitsocial_Console_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Console_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_console_empty_text(inputs)
	if (locale === "de") return de_kitsocial_console_empty_text(inputs)
	if (locale === "fr") return fr_kitsocial_console_empty_text(inputs)
	if (locale === "it") return it_kitsocial_console_empty_text(inputs)
	if (locale === "nl") return nl_kitsocial_console_empty_text(inputs)
	if (locale === "pl") return pl_kitsocial_console_empty_text(inputs)
	if (locale === "pt") return pt_kitsocial_console_empty_text(inputs)
	if (locale === "ru") return ru_kitsocial_console_empty_text(inputs)
	if (locale === "sv") return sv_kitsocial_console_empty_text(inputs)
	if (locale === "tr") return tr_kitsocial_console_empty_text(inputs)
	if (locale === "zh") return zh_kitsocial_console_empty_text(inputs)
	if (locale === "ja") return ja_kitsocial_console_empty_text(inputs)
	return en_kitsocial_console_empty_text(inputs)
});
