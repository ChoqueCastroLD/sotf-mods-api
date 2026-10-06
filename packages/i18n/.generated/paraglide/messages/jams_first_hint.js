/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_First_HintInputs */

const en_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn on notifications so jam updates reach you in the app or by email, then follow the jam when it is announced.`)
};

const es_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activa las notificaciones para recibir las novedades de los jams en la app o por correo, y sigue el jam cuando se anuncie.`)
};

const de_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktiviere Benachrichtigungen, damit Jam-Neuigkeiten dich in der App oder per E-Mail erreichen, und folge der Jam, sobald sie angekündigt wird.`)
};

const fr_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activez les notifications pour recevoir les nouvelles des jams dans l'app ou par e-mail, puis suivez le jam dès son annonce.`)
};

const it_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attiva le notifiche per ricevere gli aggiornamenti dei jam nell'app o via e-mail, poi segui il jam appena viene annunciato.`)
};

const nl_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zet meldingen aan om jamnieuws in de app of per e-mail te ontvangen en volg de jam zodra die wordt aangekondigd.`)
};

const pl_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Włącz powiadomienia, aby wieści o jamach docierały do Ciebie w aplikacji lub e-mailem, i obserwuj jam, gdy tylko zostanie ogłoszony.`)
};

const pt_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ative as notificações para receber novidades dos jams no app ou por e-mail e siga o jam assim que for anunciado.`)
};

const ru_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Включите уведомления, чтобы новости о джемах приходили в приложении или на почту, и следите за джемом, как только его объявят.`)
};

const sv_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktivera aviseringar så att nyheter om jams når dig i appen eller via e-post, och följ jammen så fort den tillkännages.`)
};

const tr_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam haberlerinin uygulamada veya e-postayla size ulaşması için bildirimleri aç ve jam duyurulur duyurulmaz takip et.`)
};

const zh_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开启通知，让 Jam 动态通过应用内或邮件送达你；Jam 一公布就关注它。`)
};

const ja_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通知をオンにすると、ジャムの更新をアプリ内またはメールで受け取れます。告知されたらすぐにフォローしましょう。`)
};

/**
* | output |
* | --- |
* | "Turn on notifications so jam updates reach you in the app or by email, then follow the jam when it is announced." |
*
* @param {Jams_First_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_first_hint = /** @type {((inputs?: Jams_First_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_First_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_first_hint(inputs)
	if (locale === "de") return de_jams_first_hint(inputs)
	if (locale === "fr") return fr_jams_first_hint(inputs)
	if (locale === "it") return it_jams_first_hint(inputs)
	if (locale === "nl") return nl_jams_first_hint(inputs)
	if (locale === "pl") return pl_jams_first_hint(inputs)
	if (locale === "pt") return pt_jams_first_hint(inputs)
	if (locale === "ru") return ru_jams_first_hint(inputs)
	if (locale === "sv") return sv_jams_first_hint(inputs)
	if (locale === "tr") return tr_jams_first_hint(inputs)
	if (locale === "zh") return zh_jams_first_hint(inputs)
	if (locale === "ja") return ja_jams_first_hint(inputs)
	return en_jams_first_hint(inputs)
});
