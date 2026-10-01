/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_First_HintInputs */

const en_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open your signal settings so jam updates reach you in the app or by email, then follow the jam the moment it is announced.`)
};

const es_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abre tus ajustes de señales para que las novedades de los jams te lleguen en la app o por correo, y sigue el jam en cuanto se anuncie.`)
};

const de_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffne deine Signal-Einstellungen, damit Jam-Neuigkeiten dich in der App oder per E-Mail erreichen, und folge dem Jam, sobald er angekündigt wird.`)
};

const fr_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrez vos réglages de signaux pour recevoir les nouvelles des jams dans l'app ou par e-mail, puis suivez le jam dès son annonce.`)
};

const it_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri le impostazioni dei segnali per ricevere gli aggiornamenti dei jam nell'app o via e-mail, poi segui il jam appena viene annunciato.`)
};

const nl_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open je signaalinstellingen om jamnieuws in de app of per e-mail te ontvangen en volg de jam zodra die wordt aangekondigd.`)
};

const pl_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz ustawienia sygnałów, aby wieści o jamach docierały do Ciebie w aplikacji lub e-mailem, i obserwuj jam, gdy tylko zostanie ogłoszony.`)
};

const pt_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abra suas configurações de sinais para receber novidades dos jams no app ou por e-mail e siga o jam assim que for anunciado.`)
};

const ru_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Откройте настройки сигналов, чтобы новости о джемах приходили в приложении или на почту, и следите за джемом, как только его объявят.`)
};

const sv_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna dina signalinställningar så att nyheter om jams når dig i appen eller via e-post, och följ jammen så fort den tillkännages.`)
};

const tr_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam haberlerinin uygulamada veya e-postayla size ulaşması için sinyal ayarlarınızı açın ve jam duyurulur duyurulmaz takip edin.`)
};

const zh_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开信号设置，让 Jam 动态通过应用内或邮件送达你；Jam 一公布就关注它。`)
};

const ja_jams_first_hint = /** @type {(inputs: Jams_First_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シグナル設定を開いて、ジャムの更新をアプリ内またはメールで受け取れるようにし、告知されたらすぐにフォローしましょう。`)
};

/**
* | output |
* | --- |
* | "Open your signal settings so jam updates reach you in the app or by email, then follow the jam the moment it is announced." |
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
